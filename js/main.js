/**
 * Portfolio - Exploring Interactions
 * Main JavaScript for interactive features
 */

document.addEventListener('DOMContentLoaded', () => {
    // Set current year in footer
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Initialize all features
    initMobileAutoPlay();
    initDesktopHover();
    initSmoothScroll();
    initHeroWeight();
});

/**
 * Mobile auto-play when visible
 * Uses Intersection Observer to detect when projects are in view
 */
function initMobileAutoPlay() {
    // Only run on touch devices (no hover)
    if (window.matchMedia('(hover: hover)').matches) {
        return;
    }

    const projects = document.querySelectorAll('.project');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const project = entry.target;
            const video = project.querySelector('video.project-animated');

            if (entry.isIntersecting) {
                project.classList.add('is-visible');
                if (video) {
                    video.play().catch(() => {});
                }
            } else {
                project.classList.remove('is-visible');
                if (video) {
                    video.pause();
                }
            }
        });
    }, observerOptions);

    projects.forEach(project => {
        observer.observe(project);
    });
}

/**
 * Desktop hover video play/pause
 */
function initDesktopHover() {
    if (!window.matchMedia('(hover: hover)').matches) return;

    document.querySelectorAll('.project-preview').forEach(preview => {
        const video = preview.querySelector('video.project-animated');
        if (!video) return;

        preview.addEventListener('mouseenter', () => {
            video.currentTime = 0;
            video.play().catch(() => {});
        });

        preview.addEventListener('mouseleave', () => {
            video.pause();
        });
    });
}

/**
 * Smooth scroll for navigation links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
}

/**
 * Hero title: starts bold, gets thinner as you scroll down
 * Subtle at first, more pronounced further down
 */
function initHeroWeight() {
    const alias = document.querySelector('.alias');
    if (!alias) return;

    let currentWeight = 900;
    let targetWeight = 900;
    let animating = false;

    function lerp(a, b, t) {
        return a + (b - a) * t;
    }

    function animate() {
        currentWeight = lerp(currentWeight, targetWeight, 0.08);
        // Stop when close enough
        if (Math.abs(currentWeight - targetWeight) < 0.5) {
            currentWeight = targetWeight;
            alias.style.fontWeight = Math.round(currentWeight);
            animating = false;
            return;
        }
        alias.style.fontWeight = Math.round(currentWeight);
        requestAnimationFrame(animate);
    }

    window.addEventListener('scroll', () => {
        const rect = alias.getBoundingClientRect();
        const titleBottom = rect.bottom;
        const viewportH = window.innerHeight;
        const progress = Math.min(Math.max(1 - titleBottom / viewportH, 0), 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        targetWeight = 900 - eased * 700;

        if (!animating) {
            animating = true;
            requestAnimationFrame(animate);
        }
    }, { passive: true });
}

