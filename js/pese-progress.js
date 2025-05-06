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
            type: 'circle'
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: false
            }
        },
        size: {
            value: 3,
            random: true
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
            bounce: false
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

// GSAP Animations
gsap.from('.title-main', {
    duration: 1.5,
    y: 50,
    opacity: 0,
    ease: 'power3.out'
});

gsap.from('.title-sub', {
    duration: 1.5,
    y: 30,
    opacity: 0,
    delay: 0.3,
    ease: 'power3.out'
});

gsap.from('.progress-circle', {
    duration: 1.5,
    scale: 0,
    opacity: 0,
    delay: 0.6,
    ease: 'back.out(1.7)'
});

// Scroll Animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-on-scroll');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements that need animation
document.querySelectorAll('.swoc-card, .timeline-item').forEach(element => {
    observer.observe(element);
});

// Add hover effect to timeline items
document.querySelectorAll('.timeline-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        gsap.to(item.querySelector('.timeline-icon'), {
            scale: 1.1,
            duration: 0.3,
            ease: 'power2.out'
        });
    });

    item.addEventListener('mouseleave', () => {
        gsap.to(item.querySelector('.timeline-icon'), {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// Add hover effect to SWOC cards
document.querySelectorAll('.swoc-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            y: -10,
            scale: 1.02,
            duration: 0.4,
            ease: 'power2.out'
        });
    });

    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.4,
            ease: 'power2.out'
        });
    });
});

// Add hover effect to list items
document.querySelectorAll('.swoc-list li').forEach(item => {
    item.addEventListener('mouseenter', () => {
        gsap.to(item, {
            x: 10,
            duration: 0.3,
            ease: 'power2.out'
        });
    });

    item.addEventListener('mouseleave', () => {
        gsap.to(item, {
            x: 0,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// Liquid Fill Loader Animation
function animateLiquidWave() {
    const wave1 = document.querySelector('.liquid-wave.wave1');
    const wave2 = document.querySelector('.liquid-wave.wave2');
    if (!wave1 || !wave2) return;
    let t = 0;
    function animate() {
        t += 0.02;
        // Wave 1
        let y1 = 70 + Math.sin(t) * 6;
        let d1 = `M0,${y1} Q30,${y1-10} 60,${y1} T120,${y1} V120 H0 Z`;
        wave1.setAttribute('d', d1);
        // Wave 2
        let y1b = 75 + Math.cos(t + 2) * 8;
        let d2 = `M0,${y1b} Q30,${y1b+10} 60,${y1b} T120,${y1b} V120 H0 Z`;
        wave2.setAttribute('d', d2);
        requestAnimationFrame(animate);
    }
    animate();
}
document.addEventListener('DOMContentLoaded', animateLiquidWave); 