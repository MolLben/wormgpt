// Configuration du site Great THUG
// Modifiez ces valeurs pour personnaliser votre site

const SITE_CONFIG = {
    // Informations personnelles
    title: "COSTAFFXX",
    citation: "Perfect sensitivity. Flawless execution.",

    // Couleurs principales (format hexadécimal)
    colors: {
        primary: "#e23535",      // Rouge principal
        secondary: "#ff4d4d",    // Rouge secondaire
        accent: "#ff6b6b",       // Rouge accent
        white: "#ffffff",        // Blanc
        black: "#000000"         // Noir
    },

    // Liens sociaux
    socialLinks: {
        instagram: "https://www.instagram.com/costaffxx2/",
        tiktok: "https://www.tiktok.com/@costaffxx",
        youtube: "https://www.youtube.com/@costaffxx",
        discord: "https://discord.gg/rk5MTSYfeD"
    },


    // Configuration des animations
    animations: {
        enabled: true,           // Activer les animations
        particleCount: 50,       // Nombre de particules
        particleSpeed: 300,      // Vitesse des particules (ms)
        titleAnimationSpeed: 200, // Vitesse d'animation du titre (ms)
        typingSpeed: 100         // Vitesse de frappe (ms)
    },

    // Configuration responsive
    responsive: {
        mobileBreakpoint: 768,   // Point de rupture mobile (px)
        tabletBreakpoint: 1024   // Point de rupture tablette (px)
    },

    // Messages personnalisés
    messages: {
        intro: "Click to enter",
        loading: "Chargement..."
    },

    // Configuration des effets visuels
    effects: {
        scanlines: true,         // Effet de scanlines
        vignette: true,          // Effet de vignette
        distortion: true,        // Effet de distorsion
        particles: true,         // Particules flottantes
        fireParticles: true,     // Particules de feu
        parallax: true,          // Effet de parallaxe
        shockwave: true          // Ondes de choc au clic
    },

    // Configuration des animations de texte
    textAnimations: {
        holographic: true,       // Animation holographique
        glitch: true,            // Effet de glitch
        neon: true,              // Effet néon
        typing: true,            // Effet de frappe
        shine: true,             // Effet brillant
        pulse: true              // Effet de pulsation
    }
};

// Fonction pour appliquer la configuration
function applyConfig() {
    // Application du titre
    document.title = SITE_CONFIG.title;

    // Application de la citation
    const citationElement = document.getElementById("citation-text");
    if (citationElement) {
        citationElement.textContent = SITE_CONFIG.citation;
    }

    // Application du titre principal
    const titleElement = document.getElementById("main-title");
    if (titleElement) {
        titleElement.textContent = SITE_CONFIG.title;
    }

    // Application du message d'intro
    const introElement = document.querySelector(".intro-text");
    if (introElement) {
        introElement.textContent = SITE_CONFIG.messages.intro;
    }


    // Mise à jour des liens sociaux
    updateSocialLinks();
}

// Fonction pour mettre à jour les liens sociaux
function updateSocialLinks() {
    const socialLinks = {
        'instagram': document.querySelector('a[href*="instagram.com"]'),
        'tiktok': document.querySelector('a[href*="tiktok.com"]'),
        'youtube': document.querySelector('a[href*="youtube.com"]'),
        'discord': document.querySelector('a[href*="discord.gg"]')
    };

    for (const [platform, element] of Object.entries(socialLinks)) {
        if (element && SITE_CONFIG.socialLinks[platform]) {
            element.href = SITE_CONFIG.socialLinks[platform];
        }
    }
}

// Fonction pour activer/désactiver les effets
function toggleEffect(effectName, enabled) {
    if (SITE_CONFIG.effects[effectName] !== undefined) {
        SITE_CONFIG.effects[effectName] = enabled;

        // Application immédiate pour certains effets
        if (effectName === 'scanlines') {
            const scanlines = document.querySelector('.scanlines');
            if (scanlines) {
                scanlines.style.display = enabled ? 'block' : 'none';
            }
        }

        if (effectName === 'vignette') {
            const vignette = document.querySelector('.vignette');
            if (vignette) {
                vignette.style.display = enabled ? 'block' : 'none';
            }
        }

        if (effectName === 'distortion') {
            const distortion = document.querySelector('.screen-distortion');
            if (distortion) {
                distortion.style.display = enabled ? 'block' : 'none';
            }
        }
    }
}

// Fonction pour changer les couleurs
function updateColors(newColors) {
    Object.assign(SITE_CONFIG.colors, newColors);

    // Mise à jour des variables CSS
    const root = document.documentElement;
    root.style.setProperty('--primary-color', SITE_CONFIG.colors.primary);
    root.style.setProperty('--secondary-color', SITE_CONFIG.colors.secondary);
    root.style.setProperty('--accent-color', SITE_CONFIG.colors.accent);
}

// Fonction pour obtenir la configuration
function getConfig() {
    return SITE_CONFIG;
}

// Export pour utilisation dans d'autres fichiers
window.SITE_CONFIG = SITE_CONFIG;
window.applyConfig = applyConfig;
window.toggleEffect = toggleEffect;
window.updateColors = updateColors;
window.getConfig = getConfig;

// Application automatique de la configuration au chargement
document.addEventListener('DOMContentLoaded', applyConfig);
