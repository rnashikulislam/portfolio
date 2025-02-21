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

// Initialize when DOM loads
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Map
    initMap();

    // Intersection Observer for Animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('visible'); // Add class to trigger animation when element is in view
            }
        });
    }, { threshold: 0.1 }); // Trigger animation when 10% of the element is in view

    // Observe elements with class 'timeline-card'
    document.querySelectorAll('.timeline-card').forEach(card => {
        observer.observe(card);
    });

    // Observe elements with class 'skill-item' for animation
    document.querySelectorAll('.skill-item').forEach(item => {
        observer.observe(item);
    });
});
