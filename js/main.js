document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
});

function initLucide() {
    return new Promise((resolve) => {
        const checkLucide = () => {
            if (window.lucide) {
                lucide.createIcons();
                resolve();
            } else {
                setTimeout(checkLucide, 100);
            }
        };
        checkLucide();
    });
}

async function initializeApp() {
    try {
        await initLucide();
        
        // Initialize hero section icons
        const heroIcons = document.querySelectorAll('.hero .lucide');
        heroIcons.forEach(icon => {
            icon.style.width = '2rem';
            icon.style.height = '2rem';
            icon.style.color = 'currentColor';
            icon.style.transition = 'all 0.3s ease';
        });
        
        // Update footer year
        const yearElement = document.getElementById('year');
        if (yearElement) {
            yearElement.textContent = new Date().getFullYear();
        }

        // Handle contact form submission
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const name = document.getElementById('name')?.value;
                const email = document.getElementById('email')?.value;
                const message = document.getElementById('message')?.value;
                
                console.log('Form submitted:', { name, email, message });
                alert('Thank you for your message! I will get back to you soon.');
                this.reset();
            });
        }
    } catch (error) {
        console.error('Initialization error:', error);
    }
}

// Start initialization
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}