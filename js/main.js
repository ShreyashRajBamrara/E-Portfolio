document.addEventListener('DOMContentLoaded', () => {
    // Initialize particles.js
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#ffffff'
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 0,
                    color: '#000000'
                },
                polygon: {
                    nb_sides: 5
                }
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#ffffff',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: false,
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
                    mode: 'grab'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 1
                    }
                },
                push: {
                    particles_nb: 4
                }
            }
        },
        retina_detect: true
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Theme transition on navigation
    document.querySelectorAll('.nav-card').forEach(card => {
        card.addEventListener('click', function(e) {
            e.preventDefault();
            const theme = this.getAttribute('data-theme');
            const href = this.getAttribute('href');
            
            // Add transition class
            document.body.classList.add('theme-transition');
            
            // Remove grayscale class
            document.body.classList.remove('grayscale');
            
            // Add theme-specific class
            document.body.classList.add(`theme-${theme}`);
            
            // Navigate after transition
            setTimeout(() => {
                window.location.href = href;
            }, 500);
        });
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements with fade-in class
    document.querySelectorAll('.about-content, .nav-card, .contact-content').forEach(element => {
        element.classList.add('fade-in-element');
        observer.observe(element);
    });

    // Form submission handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });

            // Here you would typically send the form data to a server
            console.log('Form submitted:', formObject);

            // Show success message
            const submitButton = this.querySelector('.submit-button');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Message Sent!';
            submitButton.style.backgroundColor = '#4CAF50';
            
            // Reset form
            this.reset();
            
            // Reset button after 3 seconds
            setTimeout(() => {
                submitButton.textContent = originalText;
                submitButton.style.backgroundColor = '';
            }, 3000);
        });
    }

    // Add hover effect to stat items
    document.querySelectorAll('.stat-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add scroll-to-top button
    const scrollToTopButton = document.createElement('button');
    scrollToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopButton.className = 'scroll-to-top';
    document.body.appendChild(scrollToTopButton);

    // Show/hide scroll-to-top button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopButton.classList.add('show');
        } else {
            scrollToTopButton.classList.remove('show');
        }
    });

    // Scroll to top functionality
    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Add CSS for scroll-to-top button and theme transitions
    const style = document.createElement('style');
    style.textContent = `
        .scroll-to-top {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: var(--white);
            color: var(--black);
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: none;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 1000;
        }

        .scroll-to-top.show {
            opacity: 1;
            visibility: visible;
        }

        .scroll-to-top:hover {
            transform: translateY(-3px);
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
        }

        .fade-in-element {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .fade-in {
            opacity: 1;
            transform: translateY(0);
        }

        .theme-transition {
            transition: all 0.5s ease;
        }

        .theme-red {
            background-color: #1a0000;
            color: #ff2a6d;
        }

        .theme-blue {
            background-color: #00001a;
            color: #00f3ff;
        }

        .theme-green {
            background-color: #001a00;
            color: #39ff14;
        }

        .theme-gold {
            background-color: #1a1a00;
            color: #ffd700;
        }
    `;
    document.head.appendChild(style);

    // Animate education timeline entries on scroll
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                timelineObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.timeline-entry.animate-on-scroll').forEach(entry => {
        timelineObserver.observe(entry);
    });
});

function openExperience(id) {
    document.getElementById(id).classList.add('active');
}
function closeExperience(id) {
    document.getElementById(id).classList.remove('active');
}

// Add Course Modal Logic
window.openAddCourseModal = function() {
    document.getElementById('add-course-modal').classList.add('active');
}
window.closeAddCourseModal = function() {
    document.getElementById('add-course-modal').classList.remove('active');
}
document.getElementById('add-course-form').onsubmit = function(e) {
    e.preventDefault();
    const title = document.getElementById('course-title').value;
    const info = document.getElementById('course-info').value;
    const desc = document.getElementById('course-desc').value;
    const courseList = document.querySelector('.course-list');
    const card = document.createElement('div');
    card.className = 'course-card about-style';
    card.innerHTML = `
        <div class="course-icon"><i class="fas fa-book"></i></div>
        <div class="course-details">
            <h3>${title}</h3>
            <p class="course-info">${info}</p>
            <p class="course-description">${desc}</p>
        </div>
    `;
    courseList.appendChild(card);
    closeAddCourseModal();
    this.reset();
};

// Certificates Modal Logic
window.openCertificatesModal = function() {
    document.getElementById('certificates-modal').classList.add('active');
}
window.closeCertificatesModal = function() {
    document.getElementById('certificates-modal').classList.remove('active');
}
window.uploadCertificate = function() {
    const input = document.getElementById('certificate-upload');
    const list = document.getElementById('certificates-list');
    if (input.files && input.files[0]) {
        const file = input.files[0];
        const reader = new FileReader();
        reader.onload = function(e) {
            let el;
            if (file.type.startsWith('image/')) {
                el = document.createElement('img');
                el.src = e.target.result;
                el.style.maxWidth = '120px';
                el.style.margin = '0.5rem';
                el.style.borderRadius = '8px';
            } else {
                el = document.createElement('a');
                el.href = e.target.result;
                el.textContent = file.name;
                el.target = '_blank';
                el.style.display = 'block';
                el.style.margin = '0.5rem';
            }
            list.appendChild(el);
        };
        reader.readAsDataURL(file);
        input.value = '';
    }
}; 