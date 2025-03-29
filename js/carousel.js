class CarouselBase {
    setupCarouselNavigation(track, prevButton, nextButton, currentIndex) {
        if (!track || !prevButton || !nextButton) return;

        let isDragging = false;
        let startPosition = 0;
        let currentTranslate = 0;
        let previousTranslate = 0;

        const slideCards = (direction) => {
            const cards = track.children;
            if (cards.length === 0) return;

            const cardWidth = cards[0].offsetWidth + 32;
            
            if (direction > 0 && currentIndex >= cards.length - 1) {
                currentIndex = 0;
            } else if (direction < 0 && currentIndex <= 0) {
                currentIndex = cards.length - 1;
            } else {
                currentIndex = Math.max(0, Math.min(currentIndex + direction, cards.length - 1));
            }

            const translateX = -currentIndex * cardWidth;
            track.style.transform = `translateX(${translateX}px)`;
            return currentIndex;
        };

        function touchStart(event) {
            cancelAnimationFrame(animationID);
            isDragging = true;
            startPosition = event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
            previousTranslate = currentTranslate;
            track.style.transition = 'none';
            track.style.cursor = 'grabbing';
        }

        function touchMove(event) {
            if (!isDragging) return;
            event.preventDefault();
            const currentPosition = event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
            currentTranslate = previousTranslate + currentPosition - startPosition;
            track.style.transform = `translateX(${currentTranslate}px)`;
        }

        function touchEnd() {
            isDragging = false;
            const movedBy = currentTranslate - previousTranslate;
            track.style.cursor = 'grab';
            
            if (Math.abs(movedBy) > 100) {
                currentIndex = slideCards(movedBy > 0 ? -1 : 1);
            } else {
                slideCards(0);
            }
        }

        track.addEventListener('touchstart', touchStart, { passive: false });
        track.addEventListener('touchmove', touchMove, { passive: false });
        track.addEventListener('touchend', touchEnd);
        track.addEventListener('mousedown', touchStart);
        track.addEventListener('mousemove', touchMove);
        track.addEventListener('mouseup', touchEnd);
        track.addEventListener('mouseleave', touchEnd);

        prevButton.addEventListener('click', () => currentIndex = slideCards(-1));
        nextButton.addEventListener('click', () => currentIndex = slideCards(1));

        return slideCards;
    }
}

export { CarouselBase };