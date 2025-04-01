// Enhanced skills with progress bars and animations
document.addEventListener('DOMContentLoaded', () => {
    const skills = {
        'Programming Languages': [
            { name: 'Python', level: 90 },
            { name: 'JavaScript', level: 85 },
            { name: 'Java', level: 75 },
            { name: 'HTML/CSS', level: 95 }
        ],
        'Web Development': [
            { name: 'React.js', level: 85 },
            { name: 'Node.js', level: 80 },
            { name: 'Tailwind CSS', level: 90 },
            { name: 'REST APIs', level: 85 }
        ],
        'Databases': [
            { name: 'MySQL', level: 80 },
            { name: 'MongoDB', level: 75 },
            { name: 'PostgreSQL', level: 70 },
            { name: 'SQLite', level: 85 }
        ],
        'Tools & Others': [
            { name: 'Git', level: 85 },
            { name: 'VS Code', level: 90 },
            { name: 'Linux', level: 75 },
            { name: 'Agile', level: 80 }
        ]
    };

    // Update skill cards with progress bars
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        const heading = card.querySelector('h3');
        if (heading) {
            const category = heading.textContent.trim();
            const skillList = skills[category];
            if (skillList) {
                const ul = card.querySelector('ul');
                ul.innerHTML = skillList.map(skill => `
                    <li>
                        ${skill.name}
                        <div class="skill-progress">
                            <div class="skill-progress-bar" style="--progress: ${skill.level}%"></div>
                        </div>
                    </li>
                `).join('');
            }
        }
    });

    // Animate progress bars on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-progress');
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.skill-progress').forEach(progress => {
        observer.observe(progress);
    });
});