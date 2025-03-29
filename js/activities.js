import { CarouselBase } from './carousel.js';

class ActivitiesCarousel extends CarouselBase {
    constructor() {
        super();
        this.currentIndex = 0;
        this.activities = [
            {
                date: '3 November 2024',
                title: 'Useless Project_Hackthon',
                description: 'Contributed to TinkerHub Hackathon which help me to gain hands-on experience in creative problem solving and out-of-the box thinking',
                image: 'https://raw.githubusercontent.com/aarjjun/arjunanoop/refs/heads/main/Assets/images/UselessProjetcs.jpg',
                tag: 'Hackathon',
                link: 'https://linkedin.com/in/yourusername/detail/3'
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
        this.init();
    }

    init() {
        this.renderActivities();
        this.setupCarouselNavigation();
    }

    renderActivities() {
        const track = document.querySelector('.activities-track');
        if (!track) return;
        
        track.innerHTML = this.activities.map((activity, index) => this.createActivityCard(activity, index)).join('');
    }

    createActivityCard(activity) {
        return `
            <div class="activity-card">
                <img src="${activity.image}" alt="${activity.title}" class="activity-image">
                <div class="activity-content">
                    <div class="activity-date">${activity.date}</div>
                    <h3 class="activity-title">${activity.title}</h3>
                    <p class="activity-description">${activity.description}</p>
                    <span class="activity-tag">${activity.tag}</span>
                </div>
            </div>
        `;
    }

    setupCarouselNavigation() {
        const track = document.querySelector('.activities-track');
        const prevButton = document.querySelector('.activities .carousel-prev');
        const nextButton = document.querySelector('.activities .carousel-next');
        
        super.setupCarouselNavigation(track, prevButton, nextButton, this.currentIndex);
    }
}

// Initialize when DOM is loaded
new ActivitiesCarousel();