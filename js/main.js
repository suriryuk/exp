// Global state
let config = null;
let currentLang = 'ko';

// Load configuration from JSON
async function loadConfig() {
    try {
        const response = await fetch('config/settings.json');
        config = await response.json();
        initializePage();
    } catch (error) {
        console.error('Failed to load configuration:', error);
    }
}

// Initialize page with configuration
function initializePage() {
    // Set up social links
    setupSocialLinks();

    // Set up language toggle
    setupLanguageToggle();

    // Start animation
    startAnimation();

    // Update translations
    updateTranslations();
}

// Setup social media links from config
function setupSocialLinks() {
    if (!config || !config.social) return;

    const discordLink = document.getElementById('discord-link');
    const twitterLink = document.getElementById('twitter-link');
    const emailLink = document.getElementById('email-link');

    if (discordLink) discordLink.href = config.social.discord;
    if (twitterLink) twitterLink.href = config.social.twitter;
    if (emailLink) emailLink.href = `mailto:${config.social.email}`;
}

// Setup language toggle functionality
function setupLanguageToggle() {
    const langKoBtn = document.getElementById('lang-ko');
    const langEnBtn = document.getElementById('lang-en');

    langKoBtn.addEventListener('click', () => switchLanguage('ko'));
    langEnBtn.addEventListener('click', () => switchLanguage('en'));
}

// Switch language
function switchLanguage(lang) {
    currentLang = lang;

    // Update button states
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(`lang-${lang}`).classList.add('active');

    // Update translations
    updateTranslations();
}

// Update page translations
function updateTranslations() {
    if (!config || !config.translations || !config.translations[currentLang]) return;

    const translations = config.translations[currentLang];

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[key]) {
            element.textContent = translations[key];
        }
    });
}

// Animation sequence: develop + derive = derives
function startAnimation() {
    const animationContainer = document.querySelector('.word-animation');

    // Wait for initial animations to complete (about 2.5 seconds)
    setTimeout(() => {
        // Start merging animation after 1.5 seconds
        setTimeout(() => {
            animationContainer.classList.add('merging');

            // Complete merge after 1 second
            setTimeout(() => {
                animationContainer.classList.remove('merging');
                animationContainer.classList.add('merged');
            }, 1000);
        }, 1500);
    }, 2500);
}

// Restart animation on click (optional feature)
document.addEventListener('DOMContentLoaded', () => {
    loadConfig();

    // Add click to restart animation
    const animationContainer = document.querySelector('.animation-container');
    if (animationContainer) {
        animationContainer.addEventListener('click', () => {
            restartAnimation();
        });

        // Add cursor pointer hint
        animationContainer.style.cursor = 'pointer';
        animationContainer.title = 'Click to replay animation';
    }
});

// Restart animation
function restartAnimation() {
    const animationContainer = document.querySelector('.word-animation');
    const words = animationContainer.querySelectorAll('.word, .plus, .equals');

    // Reset classes
    animationContainer.classList.remove('merging', 'merged');

    // Reset all elements
    words.forEach(word => {
        word.style.animation = 'none';
        word.offsetHeight; // Trigger reflow
        word.style.animation = null;
    });

    // Restart animation sequence
    startAnimation();
}

// Add some interactivity - pulse effect on hover for social icons
document.addEventListener('DOMContentLoaded', () => {
    const socialIcons = document.querySelectorAll('.social-icon');

    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.animation = 'pulse 0.5s ease-in-out';
        });

        icon.addEventListener('animationend', function() {
            this.style.animation = '';
        });
    });
});

// Add pulse animation via CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.1);
        }
    }
`;
document.head.appendChild(style);
