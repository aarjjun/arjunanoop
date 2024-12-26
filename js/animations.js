// Intersection Observer for scroll animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Animate elements on scroll
document.addEventListener('DOMContentLoaded', () => {
    // Add animation classes to elements
    const animateElements = document.querySelectorAll('.skill-card, .project-card, .contact-form, .contact-info');
    animateElements.forEach(el => {
        observer.observe(el);
    });

    // Add stagger animation to skills grid
    const skillsGrid = document.querySelector('.skills-grid');
    if (skillsGrid) {
        skillsGrid.classList.add('stagger-children');
    }

    // Add hover animation classes
    const hoverElements = document.querySelectorAll('.project-card, .skill-card, .social-links a');
    hoverElements.forEach(el => {
        el.classList.add('hover-lift');
    });
});