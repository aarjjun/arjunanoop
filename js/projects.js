import { CarouselBase } from './carousel.js';

class ProjectsCarousel extends CarouselBase {
    constructor() {
        super();
        this.currentIndex = 0;
        this.projects = [
            {
                title: 'React Netflix Clone',
                description: 'A Netflix clone using React, incorporating modern UI/UX design and integrating TMDB API for dynamic movie data',
                detailedDescription: `This Netflix clone is a comprehensive web application built with React that replicates the core features of Netflix's user interface. The project leverages the TMDB (The Movie Database) API to fetch real-time movie and TV show data, providing users with an authentic streaming platform experience.

Key Features:
• Dynamic content loading with real-time data from TMDB API
• Responsive design that adapts to all screen sizes
• Custom video player with preview functionality
• Genre-based content categorization
• Search functionality with instant results
• User authentication and profile management
• Smooth animations and transitions

Technical Implementation:
The application uses React's latest features including hooks and context API for state management. The UI is built with custom CSS and modern design principles, ensuring a seamless user experience. API calls are optimized with proper error handling and loading states.`,
                mainImage: 'https://raw.githubusercontent.com/aarjjun/arjunanoop/refs/heads/main/Assets/ProjectImages/NetflixReactClone.png',
                gallery: [
                    'https://raw.githubusercontent.com/aarjjun/arjunanoop/refs/heads/main/Assets/ProjectImages/NetflixReactClone.png',
                    'https://raw.githubusercontent.com/aarjjun/arjunanoop/refs/heads/main/Assets/ProjectImages/NetflixReactClone.png',
                    'https://raw.githubusercontent.com/aarjjun/arjunanoop/refs/heads/main/Assets/ProjectImages/NetflixReactClone.png'
                ],
                tech: ['React', 'JavaScript'],
                github: 'https://github.com/aarjjun/React-Netflix-clone',
                demo: 'https://aarjjun.github.io/React-Netflix-clone/'
            },
            {
                title: 'Maveli ChatBot',
                description: 'A simple chatbot built using HTML, CSS, and JavaScript to engage users in interactive conversations',
                detailedDescription: `The Maveli ChatBot is an interactive conversational agent that brings the traditional Kerala folklore character Mahabali (Maveli) to life. This project combines cultural elements with modern web technologies to create an engaging user experience.

Key Features:
• Natural language processing for understanding user queries
• Context-aware responses based on Kerala culture and Onam traditions
• Multi-language support (English and Malayalam)
• Interactive UI with typing animations
• Custom response templates for different conversation scenarios
• Mobile-responsive design
• Offline functionality

Technical Details:
Built using vanilla JavaScript for core functionality, the chatbot implements a custom natural language processing algorithm. The UI is crafted with CSS animations to create a smooth, engaging experience. The response system uses a sophisticated matching algorithm to provide contextually relevant answers.`,
                mainImage: 'https://raw.githubusercontent.com/aarjjun/arjunanoop/refs/heads/main/Assets/ProjectImages/MaveliChatBot.png',
                gallery: [
                    'Assets/ProjectImages/maveli1.jpg',
                    'Assets/ProjectImages/maveli2.jpg',
                    'Assets/ProjectImages/maveli3.jpg'
                ],
                tech: ['HTML', 'JavaScript', 'CSS'],
                github: 'https://github.com/aarjjun/MaveliChatBot',
                demo: 'https://maveli-chat-bot.netlify.app/'
            },
            {
                title: 'Rythmix',
                description: 'A song-finding web application that helps users discover songs based on partial memories like lyrics, actors, visuals, or other details',
                detailedDescription: `Rythmix is an innovative song discovery platform that helps users find songs based on fragmented memories. Whether it's a partial lyric, a music video scene, or an artist's description, Rythmix uses advanced search algorithms to help users find their desired songs.

Key Features:
• Multi-parameter search functionality
• Advanced pattern matching for partial lyrics
• Visual search using scene descriptions
• Artist and movie-based song filtering
• Playlist creation and management
• Social sharing capabilities
• Cross-platform compatibility

Technical Architecture:
Built with Python and Flask for the backend, the application uses sophisticated search algorithms and natural language processing. The frontend is developed with modern JavaScript and responsive design principles. The database is optimized for quick search results and uses efficient indexing for better performance.`,
                mainImage: 'https://raw.githubusercontent.com/aarjjun/arjunanoop/refs/heads/main/Assets/ProjectImages/Rythmix.png',
                gallery: [
                    'Assets/ProjectImages/rythmix1.jpg',
                    'Assets/ProjectImages/rythmix2.jpg',
                    'Assets/ProjectImages/rythmix3.jpg'
                ],
                tech: ['Python', 'Flask', 'JS', 'HTML'],
                github: 'https://github.com/aarjjun/Rythmix',
                demo: '#'
            }
        ];
        this.init();
    }

    init() {
        this.renderProjects();
        this.setupEventListeners();
        this.setupCarouselNavigation(); // Fix: add 'this.' to call class method
    }

    setupCarouselNavigation() {
        const track = document.querySelector('.projects-track');
        const prevButton = document.querySelector('.projects .carousel-prev');
        const nextButton = document.querySelector('.projects .carousel-next');
        
        super.setupCarouselNavigation(track, prevButton, nextButton, this.currentIndex);
    }
    renderProjects() {
        const track = document.querySelector('.projects-track');
        if (!track) return;
        
        track.innerHTML = this.projects.map((project, index) => this.createProjectCard(project, index)).join('');
    }

    createProjectCard(project, index) {
        return `
            <div class="project-card" data-index="${index}">
                <div class="project-image-container">
                    <img src="${project.mainImage}" alt="${project.title}" class="project-image">
                </div>
                <div class="project-content">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tech">
                        ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                    <div class="project-links">
                        <a href="${project.github}" target="_blank" class="project-link">
                            <i data-lucide="github"></i> GitHub
                        </a>
                        ${project.demo !== '#' ? `
                            <a href="${project.demo}" target="_blank" class="project-link">
                                <i data-lucide="external-link"></i> Demo
                            </a>
                        ` : ''}
                    </div>
                </div>
            </div>
        `;
    }

    setupEventListeners() {
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach((card, index) => {
            card.addEventListener('click', () => this.showProjectDetails(this.projects[index]));
        });
    }

    showProjectDetails(project) {
        const modal = document.querySelector('.project-modal');
        const mainImage = modal.querySelector('.gallery-main');
        const thumbnails = modal.querySelector('.gallery-thumbnails');
        const title = modal.querySelector('.modal-title');
        const description = modal.querySelector('.modal-description');
        const techStack = modal.querySelector('.modal-tech');
        const links = modal.querySelector('.modal-links');

        // Set initial content
        mainImage.src = project.mainImage;
        mainImage.alt = project.title;
        title.textContent = project.title;
        description.innerHTML = project.detailedDescription.replace(/\n/g, '<br>');

        // Setup carousel variables
        let currentImageIndex = 0;
        const images = project.gallery;
        let slideshow;

        const updateImage = () => {
            mainImage.style.animation = 'none';
            mainImage.offsetHeight;
            mainImage.style.animation = 'fadeIn 0.5s ease-in-out';
            setTimeout(() => {
                mainImage.src = images[currentImageIndex];
                updateIndicators();
            }, 100);
        };

        // Create slide indicators
        const indicators = document.createElement('div');
        indicators.className = 'slide-indicators';
        indicators.innerHTML = images.map((_, idx) => 
            `<div class="slide-dot ${idx === 0 ? 'active' : ''}"></div>`
        ).join('');
        modal.querySelector('.modal-gallery').appendChild(indicators);

        const updateIndicators = () => {
            indicators.querySelectorAll('.slide-dot').forEach((dot, idx) => {
                dot.classList.toggle('active', idx === currentImageIndex);
            });
        };

        // Setup slideshow
        const startSlideshow = () => {
            slideshow = setInterval(() => {
                currentImageIndex = (currentImageIndex + 1) % images.length;
                updateImage();
            }, 3000);
        };

        // Setup tech stack and links
        techStack.innerHTML = `
            <h3 class="tech-title">Technologies Used</h3>
            <div class="tech-list">
                ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
        `;

        links.innerHTML = `
            <a href="${project.github}" target="_blank" class="modal-link">
                <i data-lucide="github"></i> View Code
            </a>
            ${project.demo !== '#' ? `
                <a href="${project.demo}" target="_blank" class="modal-link">
                    <i data-lucide="external-link"></i> Live Demo
                </a>
            ` : ''}
        `;

        // Modal controls
        const closeModal = () => {
            modal.classList.remove('active');
            document.body.style.overflow = '';
            clearInterval(slideshow);
            indicators.remove();
            thumbnails.innerHTML = '';
        };

        modal.querySelector('.modal-close').addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });

        // Show modal and start slideshow
        document.body.style.overflow = 'hidden';
        modal.classList.add('active');
        lucide.createIcons();
        startSlideshow();
    }
}

// Initialize when DOM is loaded
new ProjectsCarousel();