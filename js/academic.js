// Academic data
const academicData = [
    {
        institution: 'XYZ University',
        degree: 'B.Tech in Computer Science',
        year: '2021-2025',
        grade: 'CGPA: 8.5/10',
        description: 'Specialized in Game Development and Web Technologies. Participated in multiple hackathons and game jams.',
        achievements: [
            'First Prize in University Game Development Competition',
            'Published research paper on AI in Game Development',
            'Lead Developer of University Game Development Club'
        ]
    },
    {
        institution: 'ABC School',
        degree: 'Class 12 - Science',
        year: '2019-2021',
        grade: 'Percentage: 92%',
        description: 'Focused on Physics, Chemistry, and Mathematics. Active participant in Science Olympiads.',
        achievements: [
            'Gold Medal in National Science Olympiad',
            'School Topper in Physics',
            'Represented School in State Level Science Exhibition'
        ]
    },
    {
        institution: 'DEF High School',
        degree: 'Class 10',
        year: '2017-2019',
        grade: 'Percentage: 95%',
        description: 'Strong foundation in Science and Mathematics. Active in extracurricular activities.',
        achievements: [
            'School Topper in Mathematics',
            'Best Project Award in Science Fair',
            'Represented School in District Level Quiz Competition'
        ]
    }
];

// Initialize particles
particlesJS('particles-js', {
    particles: {
        number: {
            value: 50,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#ff2a6d'
        },
        shape: {
            type: 'circle'
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#ff2a6d',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 1,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'repulse'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        }
    },
    retina_detect: true
});

// Generate timeline entries
function generateTimeline() {
    const timelineContainer = document.querySelector('.timeline-container');
    
    academicData.forEach((entry, index) => {
        const timelineEntry = document.createElement('div');
        timelineEntry.className = 'timeline-entry';
        
        timelineEntry.innerHTML = `
            <div class="timeline-node"></div>
            <div class="timeline-content">
                <h2>${entry.institution}</h2>
                <h3>${entry.degree}</h3>
                <div class="year">${entry.year} | ${entry.grade}</div>
                <p>${entry.description}</p>
                <ul class="achievements">
                    ${entry.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                </ul>
            </div>
        `;
        
        timelineContainer.appendChild(timelineEntry);
    });
}

// Intersection Observer for scroll animations
function setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.timeline-entry').forEach(entry => {
        observer.observe(entry);
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    generateTimeline();
    setupIntersectionObserver();
}); 