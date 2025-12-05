// Profile Picture Fallback
document.addEventListener('DOMContentLoaded', function() {
    const profilePicture = document.getElementById('profilePicture');
    
    // If profile picture doesn't load, use a placeholder
    profilePicture.addEventListener('error', function() {
        // Create a placeholder with initials
        this.style.display = 'none';
        const placeholder = document.createElement('div');
        placeholder.className = 'profile-picture-placeholder';
        placeholder.textContent = 'LS';
        placeholder.style.cssText = `
            width: 150px;
            height: 150px;
            border-radius: 50%;
            border: 4px solid white;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 3rem;
            font-weight: bold;
            color: white;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        `;
        profilePicture.parentNode.insertBefore(placeholder, profilePicture);
    });

    // Smooth scroll for anchor links
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

    // Add scroll animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});

