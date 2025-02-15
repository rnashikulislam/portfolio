// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        themeToggle.querySelector('i').classList.toggle('fa-sun');
    });
}

// Map Initialization
function initMap() {
    const mapContainer = document.getElementById('locationMap');
    if (mapContainer) {
        const map = L.map(mapContainer).setView([21.4272, 92.0058], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
        L.marker([21.4272, 92.0058]).addTo(map)
            .bindPopup('Current Location: Ukhiya, Cox’s Bazar');
    }
}

// Initialize when DOM loads
document.addEventListener('DOMContentLoaded', () => {
    initMap();
    
    // Add intersection observer for timeline animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.timeline-card').forEach(card => {
        observer.observe(card);
    });
});
