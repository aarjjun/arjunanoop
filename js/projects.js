// Enhanced projects carousel with smooth animations
class ProjectsCarousel {
    constructor() {
        this.currentIndex = 0;
        this.projects = [
            {
                title: 'React Netflix Clone',
                description: 'A Netflix clone using React, incorporating modern UI/UX design and integrating TMDB API for dynamic movie data',
                image: 'https://raw.githubusercontent.com/aarjjun/arjunanoop/refs/heads/main/Assets/ProjectImages/NetflixReactClone.png',
                tech: ['React','JavaScript'],
                github: 'https://github.com/aarjjun/React-Netflix-clone',
                demo: ' https://aarjjun.github.io/React-Netflix-clone/'
            },
            {
                title: 'Maveli ChatBot',
                description: 'A simple chatbot built using HTML, CSS, and JavaScript to engage users in interactive conversations',
                image: 'https://raw.githubusercontent.com/aarjjun/arjunanoop/refs/heads/main/Assets/ProjectImages/MaveliChatBot.png',
                tech: ['HTML','JavaScript','CSS'],
                github: ' https://github.com/aarjjun/MaveliChatBot',
                demo: 'https://maveli-chat-bot.netlify.app/'
            },
            {
                title: 'Rythmix',
                description: 'A song-finding web application that helps users discover songs based on partial memories like lyrics, actors, visuals, or other details, powered by the Genius API',
                image: 'https://raw.githubusercontent.com/aarjjun/arjunanoop/refs/heads/main/Assets/ProjectImages/Rythmix.png',
                tech: ['Python','Flask','JS','HTML'],
                github: 'https://github.com/aarjjun/Rythmix',
                demo: ''
            },
        ];

        this.init();
    }

    init() {
        this.renderProjects();
        this.setupNavigation();
        this.setupAutoplay();
        this.setupIntersectionObserver();
        this.setupHoverEffects();
    }

    renderProjects() {
        const track = document.querySelector('.projects-track');
        track.innerHTML = this.projects.map((project, index) => this.createProjectCard(project, index)).join('');
    }

    createProjectCard(project, index) {
        return `
            <div class="project-card" data-index="${index}">
                <div class="project-image-container">
                    <img src="${project.image}" alt="${project.title}" class="project-image">
                </div>
                <div class="project-content">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tech">
                        ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                    <div class="project-links">
                        <a href="${project.github}" class="project-link" target="_blank" rel="noopener noreferrer">
                            <i class="fas fa-code"></i> View Code
                        </a>
                        <a href="${project.demo}" class="project-link" target="_blank" rel="noopener noreferrer">
                            <i class="fas fa-external-link-alt"></i> Live Demo
                        </a>
                    </div>
                </div>
            </div>
        `;
    }

    setupNavigation() {
        const nav = document.createElement('div');
        nav.className = 'carousel-nav';
        nav.innerHTML = `
            <button class="carousel-button prev">
                <i class="fas fa-chevron-left"></i>
            </button>
            <div class="carousel-dots">
                ${this.projects.map((_, i) => `
                    <div class="carousel-dot ${i === 0 ? 'active' : ''}" data-index="${i}"></div>
                `).join('')}
            </div>
            <button class="carousel-button next">
                <i class="fas fa-chevron-right"></i>
            </button>
        `;

        document.querySelector('.projects-carousel').appendChild(nav);

        // Add event listeners
        nav.querySelector('.prev').addEventListener('click', () => this.prev());
        nav.querySelector('.next').addEventListener('click', () => this.next());
        nav.querySelector('.carousel-dots').addEventListener('click', (e) => {
            if (e.target.classList.contains('carousel-dot')) {
                this.goToSlide(parseInt(e.target.dataset.index));
            }
        });
    }

    // setupAutoplay() {
    //     setInterval(() => this.next(), 5000);
    // }

    setupIntersectionObserver() {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        document.querySelectorAll('.project-card').forEach(card => {
            observer.observe(card);
        });
    }

    setupHoverEffects() {
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-10px) scale(1.02)';
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
            });
        });
    }

    goToSlide(index) {
        this.currentIndex = index;
        const offset = index * (400 + 32); // card width + gap
        document.querySelector('.projects-track').style.transform = `translateX(-${offset}px)`;
        this.updateDots();
    }

    next() {
        this.currentIndex = (this.currentIndex + 1) % this.projects.length;
        this.goToSlide(this.currentIndex);
    }

    prev() {
        this.currentIndex = (this.currentIndex - 1 + this.projects.length) % this.projects.length;
        this.goToSlide(this.currentIndex);
    }

    updateDots() {
        document.querySelectorAll('.carousel-dot').forEach((dot, i) => {
            dot.classList.toggle('active', i === this.currentIndex);
        });
    }
}

// Initialize carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ProjectsCarousel();
});