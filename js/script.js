// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        themeToggle.querySelector('i').classList.toggle('fa-sun');
        themeToggle.querySelector('i').classList.toggle('fa-moon'); // Toggle moon and sun icon
    });
}

// Map Initialization
function initMap() {
    const mapContainer = document.getElementById('locationMap');
    if (mapContainer) {
        const map = L.map(mapContainer).setView([21.4272, 92.0058], 13); // Set the map's initial location and zoom level
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map); // Use OpenStreetMap tiles
        L.marker([21.4272, 92.0058]).addTo(map) // Add a marker at the specified location
            .bindPopup('Current Location: Ukhiya, Cox’s Bazar'); // Popup message
    }
}

// Create scroll progress indicator
const createScrollProgress = () => {
    const scrollProgress = document.createElement('div');
    scrollProgress.className = 'scroll-progress';
    document.body.appendChild(scrollProgress);
    return scrollProgress;
};

// Update scroll progress
const scrollProgress = createScrollProgress();
window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    scrollProgress.style.width = `${scrolled}%`;
});

// Initialize when DOM loads
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Map
    initMap();

    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: false,
        mirror: false,
        offset: 100
    });

    // Intersection Observer for Animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.timeline-card, .skill-item').forEach(item => {
        observer.observe(item);
    });
});
