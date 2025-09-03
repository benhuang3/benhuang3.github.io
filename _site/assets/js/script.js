// Modern Portfolio JavaScript
class Portfolio {
    constructor() {
        this.init();
    }

    init() {
        this.setupSmoothScrolling();
        this.setupProjectCards();
        this.setupKeyboardNavigation();
        this.setupIntersectionObserver();
        this.setupClickOutside();
        this.setupLoadingStates();
        this.setupDarkMode();
        this.setupLowDetailMode();
    }

    setupSmoothScrolling() {
        // Enhanced smooth scrolling with offset for fixed headers
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const href = anchor.getAttribute('href');
                const target = document.querySelector(href);
                if (target) {
                    // Scroll a bit further so the white section is fully visible
                    const extraScroll = href === '#projects' ? 140 : 80;
                    const offsetTop = target.getBoundingClientRect().top + window.pageYOffset + extraScroll;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    setupProjectCards() {
        const cards = document.querySelectorAll('.project-card');
        
        cards.forEach(card => {
            // If the project card is an anchor (navigates), don't attach expand handlers
            if (card.tagName && card.tagName.toLowerCase() === 'a') {
                return;
            }
            // Enhanced click handler with accessibility
            const handleToggle = () => {
                const isExpanded = card.classList.contains('expanded');
                card.classList.toggle('expanded');
                card.setAttribute('aria-expanded', !isExpanded);
                
                // Add subtle animation feedback
                card.style.transform = 'scale(0.98)';
                setTimeout(() => {
                    card.style.transform = '';
                }, 150);
            };

            card.addEventListener('click', handleToggle);
            
            // Keyboard support
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleToggle();
                }
            });
        });
    }

    setupKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                // Close all expanded cards
                const expandedCards = document.querySelectorAll('.project-card.expanded');
                expandedCards.forEach(card => {
                    card.classList.remove('expanded');
                    card.setAttribute('aria-expanded', 'false');
                });
            }
        });
    }

    setupIntersectionObserver() {
        // Animate elements as they come into view
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe project cards for scroll animations
        document.querySelectorAll('.project-card').forEach(card => {
            observer.observe(card);
        });
    }

    setupClickOutside() {
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.project-card')) {
                const expandedCards = document.querySelectorAll('.project-card.expanded');
                expandedCards.forEach(card => {
                    card.classList.remove('expanded');
                    card.setAttribute('aria-expanded', 'false');
                });
            }
        });
    }

    setupLoadingStates() {
        // Add loading states for images
        const images = document.querySelectorAll('img[loading="lazy"]');
        
        images.forEach(img => {
            img.addEventListener('load', () => {
                img.style.opacity = '1';
            });
            
            img.addEventListener('error', () => {
                img.style.opacity = '0.5';
                img.alt = 'Image failed to load';
            });
        });
    }

    setupDarkMode() {
        const themeToggle = document.getElementById('theme-toggle');
        const sunIcon = document.getElementById('sun-icon');
        const moonIcon = document.getElementById('moon-icon');
        
        // Get saved theme or default to light
        const savedTheme = localStorage.getItem('theme') || 'light';
        this.setTheme(savedTheme);
        
        // Toggle theme on button click
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            this.setTheme(newTheme);
            localStorage.setItem('theme', newTheme);
        });
        
        // Listen for system theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!localStorage.getItem('theme')) {
                this.setTheme(e.matches ? 'dark' : 'light');
            }
        });
    }

    setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        const sunIcon = document.getElementById('sun-icon');
        const moonIcon = document.getElementById('moon-icon');
        
        if (theme === 'dark') {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
        } else {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        }
    }

    setupLowDetailMode() {
        const lowDetailToggle = document.getElementById('low-detail-toggle');
        const lowDetailIcon = document.getElementById('low-detail-icon');
        const highDetailIcon = document.getElementById('high-detail-icon');
        const body = document.getElementById('body');
        
        // Get saved low detail mode preference or default to false
        const savedLowDetailMode = localStorage.getItem('lowDetailMode') === 'true';
        this.setLowDetailMode(savedLowDetailMode);
        
        // Toggle low detail mode on button click
        lowDetailToggle.addEventListener('click', () => {
            const currentMode = body.classList.contains('low-detail-mode');
            const newMode = !currentMode;
            this.setLowDetailMode(newMode);
            localStorage.setItem('lowDetailMode', newMode.toString());
        });
        
        // Add keyboard support
        lowDetailToggle.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                lowDetailToggle.click();
            }
        });
    }

    setLowDetailMode(isLowDetail) {
        const body = document.getElementById('body');
        const lowDetailIcon = document.getElementById('low-detail-icon');
        const highDetailIcon = document.getElementById('high-detail-icon');
        
        if (isLowDetail) {
            body.classList.add('low-detail-mode');
            lowDetailIcon.style.display = 'none';
            highDetailIcon.style.display = 'block';
            
            // In low detail mode, expand all project cards by default for better readability
            const projectCards = document.querySelectorAll('.project-card');
            projectCards.forEach(card => {
                card.classList.add('expanded');
                card.setAttribute('aria-expanded', 'true');
            });
        } else {
            body.classList.remove('low-detail-mode');
            lowDetailIcon.style.display = 'block';
            highDetailIcon.style.display = 'none';
            
            // In normal mode, collapse all project cards
            const projectCards = document.querySelectorAll('.project-card');
            projectCards.forEach(card => {
                card.classList.remove('expanded');
                card.setAttribute('aria-expanded', 'false');
            });
        }
    }
}

// Enhanced toggle function for backward compatibility
function toggleExpansion(card) {
    const isExpanded = card.classList.contains('expanded');
    card.classList.toggle('expanded');
    card.setAttribute('aria-expanded', !isExpanded);
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new Portfolio();
    
    // Add a subtle loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in-out';
        document.body.style.opacity = '1';
    }, 100);
});

// Handle page visibility changes for performance
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause animations when tab is not visible
        document.body.style.animationPlayState = 'paused';
    } else {
        // Resume animations when tab becomes visible
        document.body.style.animationPlayState = 'running';
    }
});
