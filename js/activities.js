class ActivitiesCarousel {
    constructor() {
        this.activities = [
            {
                date: '3 November 2024',
                title: 'Useless Project_Hackthon',
                description: 'Contributed to TinkerHub Hackathon which help me to gain hands-on experience in creative problem solving and out-of-the box thinking',
                image: 'https://raw.githubusercontent.com/aarjjun/arjunanoop/refs/heads/main/Assets/images/UselessProjetcs.jpg',
                tag: 'Hackathon',
                link: ''
            },
            {
                date: '26 October 2024',
                title: 'Dev Fest Volunteer',
                description: 'Volunteered at Google DevFest actively contributing to event coordination, attendee assistance while enhancing skills in community engagement',
                image: 'https://raw.githubusercontent.com/aarjjun/arjunanoop/refs/heads/main/Assets/images/DevFest.JPG',
                tag: 'Volunteering',
                link: 'https://linkedin.com/in/yourusername/detail/3'
            },
            {
                date: '23 September 2024',
                title: 'Global Health Care Ideathon',
                description: 'Global Health Care Ideathon at Le Meridien, where I collaborated with peers to develop innovative solutions for healthcare challenges',
                image: 'https://raw.githubusercontent.com/aarjjun/arjunanoop/refs/heads/main/Assets/images/GlobalHealthCareIdeathon.jpg',
                tag: 'Ideathon',
                link: 'https://www.linkedin.com/posts/arjunanoop_globalhealthcare-healthcareinnovation-climatehealthimpact-activity-7256697210615017472-LswH'
            },
            {
                date: '8 July 2024',
                title: 'No Code Tool Class For Freshers',
                description: 'Conducted a session for freshers on No Code Tools, introducing them to project-building without programming knowledge',
                image: 'https://raw.githubusercontent.com/aarjjun/arjunanoop/refs/heads/main/Assets/images/NoCodeToolClass.jpg',
                tag: 'Speaking',
                link: 'https://www.linkedin.com/posts/arjunanoop_nocode-programming-skillbuilding-activity-7239858490649800704-2Fb9'
            },
            {
                date: '10 August 2024',
                title: 'CTF at SCET Thrissur',
                description: 'Designed to test participants problem solving skill through various challenges',
                image: 'https://raw.githubusercontent.com/aarjjun/arjunanoop/refs/heads/main/Assets/images/CTF_SCET.jpg',
                tag: 'CTF',
                link: 'https://www.linkedin.com/posts/arjunanoop_cybersecurity-capturetheflag-kickstartctf-activity-7256689158608347138-DvB4'
            },
            {
                date: '19 July 2024',
                title: 'Slash Key 3.0',
                description: 'Hackathon at NIT Calicut, focusing on disaster management through blind spot analysis',
                image: 'https://raw.githubusercontent.com/aarjjun/arjunanoop/refs/heads/main/Assets/images/SlashKey.jpg',
                tag: 'Hackathon',
                link: 'https://www.linkedin.com/posts/arjunanoop_hackathonrxperience-slashkey-ieee-activity-7223732792893878272-SoOm'
            },
            {
                date: '15 June 2024',
                title: 'Google I/O Kochi',
                description: 'Attended Google I/O Extended Kochi, a premier event that brings the excitement of Google I/O and helped to Network with like minded people.',
                image: 'https://raw.githubusercontent.com/aarjjun/arjunanoop/refs/heads/main/Assets/images/Google%20IO.jpg',
                tag: 'Google Event',
                link: 'https://www.linkedin.com/posts/arjunanoop_googleio-gdgcochin-techconference-activity-7209515626204127232-WdTY'
            }
        ];
        this.isDragging = false;
        this.startX = 0;
        this.scrollLeft = 0;
        this.init();
        this.addDragScroll();
    }

    addDragScroll() {
        this.track.addEventListener('mousedown', (e) => {
            this.isDragging = true;
            this.startX = e.pageX - this.track.offsetLeft;
            this.scrollLeft = this.track.scrollLeft;
            this.track.style.cursor = 'grabbing';
        });

        this.track.addEventListener('mousemove', (e) => {
            if (!this.isDragging) return;
            e.preventDefault();
            const x = e.pageX - this.track.offsetLeft;
            const walk = (x - this.startX) * 2; // The multiplier controls scroll speed
            this.track.scrollLeft = this.scrollLeft - walk;
        });

        ['mouseup', 'mouseleave'].forEach(type => {
            this.track.addEventListener(type, () => {
                this.isDragging = false;
                this.track.style.cursor = 'grab';
            });
        });
    }

    init() {
        console.log('Initializing Activities Carousel');
        this.track = document.querySelector('.activities-track');
        this.prevBtn = document.querySelector('.carousel-prev');
        this.nextBtn = document.querySelector('.carousel-next');
        
        if (!this.track) {
            console.error('Activities track element not found');
            return;
        }

        this.renderActivities();
        this.setupNavigation();
    }

    renderActivities() {
        this.track.innerHTML = this.activities.map(activity => `
            <div class="activity-card loading" onclick="window.open('${activity.link}', '_blank')">
                <picture>
                    <source srcset="${activity.image}" type="image/jpeg">
                    <img src="${activity.image}" 
                         alt="${activity.title}" 
                         class="activity-image loading"
                         loading="lazy"
                         width="350"
                         height="200"
                         onload="this.classList.remove('loading'); this.classList.add('loaded'); this.parentElement.classList.remove('loading')">
                </picture>
                <div class="activity-content">
                    <span class="activity-date">${activity.date}</span>
                    <h3 class="activity-title">${activity.title}</h3>
                    <p class="activity-description">${activity.description}</p>
                    <div class="activity-tags">
                        <span class="activity-tag">${activity.tag}</span>
                    </div>
                </div>
            </div>
        `).join('');

        // Add cursor style to show cards are clickable
        const cards = this.track.querySelectorAll('.activity-card');
        cards.forEach(card => {
            card.style.cursor = 'pointer';
        });
    }

    setupNavigation() {
        if (this.prevBtn && this.nextBtn) {
            this.prevBtn.addEventListener('click', () => this.navigate(-1));
            this.nextBtn.addEventListener('click', () => this.navigate(1));
        }
    }

    navigate(direction) {
        const cardWidth = 350; // Width of activity card + gap
        this.track.scrollBy({
            left: cardWidth * direction,
            behavior: 'smooth'
        });
    }
}

// Initialize carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ActivitiesCarousel();
});