// Enhanced loading animation with interactive elements
document.addEventListener('DOMContentLoaded', function() {
    const loader = document.querySelector('.loader');
    const moon = document.querySelector('.moon');
    const leftCurtain = document.querySelector('.curtain.left');
    const rightCurtain = document.querySelector('.curtain.right');
    
    // Add random twinkling stars
    function createRandomStars() {
        const starsContainer = document.querySelector('.stars');
        
        for (let i = 0; i < 15; i++) {
            const star = document.createElement('div');
            star.className = 'random-star';
            star.style.position = 'absolute';
            star.style.width = Math.random() * 3 + 1 + 'px';
            star.style.height = star.style.width;
            star.style.background = 'white';
            star.style.borderRadius = '50%';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.animation = `twinkle ${Math.random() * 3 + 2}s infinite`;
            star.style.animationDelay = Math.random() * 2 + 's';
            starsContainer.appendChild(star);
        }
    }
    
    // Add floating particles effect
    function createFloatingParticles() {
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'particles';
        particlesContainer.style.position = 'absolute';
        particlesContainer.style.width = '100%';
        particlesContainer.style.height = '100%';
        particlesContainer.style.pointerEvents = 'none';
        
        for (let i = 0; i < 8; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'absolute';
            particle.style.width = '2px';
            particle.style.height = '2px';
            particle.style.background = 'rgba(255, 255, 255, 0.6)';
            particle.style.borderRadius = '50%';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animation = `float ${Math.random() * 8 + 6}s ease-in-out infinite`;
            particle.style.animationDelay = Math.random() * 3 + 's';
            particlesContainer.appendChild(particle);
        }
        
        loader.appendChild(particlesContainer);
    }
    
    // Add CSS animations for particles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% {
                transform: translateY(0px) translateX(0px);
                opacity: 0.6;
            }
            25% {
                transform: translateY(-10px) translateX(5px);
                opacity: 1;
            }
            50% {
                transform: translateY(-20px) translateX(-5px);
                opacity: 0.8;
            }
            75% {
                transform: translateY(-10px) translateX(3px);
                opacity: 1;
            }
        }
        
        .random-star {
            filter: blur(0.5px);
        }
        
        .loader:hover .moon {
            animation-duration: 1.5s;
        }
        
        .loader:hover .curtain.left {
            animation-duration: 2s;
        }
        
        .loader:hover .curtain.right {
            animation-duration: 2s;
        }
    `;
    document.head.appendChild(style);
    
    // Initialize effects
    createRandomStars();
    createFloatingParticles();
    
    // Add hover interaction
    loader.addEventListener('mouseenter', function() {
        moon.style.filter = 'brightness(1.3)';
    });
    
    loader.addEventListener('mouseleave', function() {
        moon.style.filter = 'brightness(1)';
    });
    
    // Simulate loading completion after 8 seconds
    setTimeout(function() {
        loader.style.opacity = '0.7';
        loader.style.transform = 'scale(0.95)';
        loader.style.transition = 'all 1s ease-out';
        
        setTimeout(function() {
            loader.style.opacity = '1';
            loader.style.transform = 'scale(1)';
        }, 1000);
    }, 8000);
});