function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
}

// Close sidebar when clicking outside (mobile)
document.addEventListener('click', function(event) {
    const sidebar = document.getElementById('sidebar');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    
    if (window.innerWidth <= 768 && 
        !sidebar.contains(event.target) && 
        !menuBtn.contains(event.target)) {
        sidebar.classList.remove('open');
    }
});

// Navigation functionality
document.querySelectorAll('.sidebar-item').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active class from all items
        document.querySelectorAll('.sidebar-item').forEach(i => i.classList.remove('active'));
        
        // Add active class to clicked item
        this.classList.add('active');
        
        // Here you would typically handle navigation
        console.log('Navigate to:', this.dataset.apiLabel);
    });
});

// Filter navigation
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // Remove active class from all buttons
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Filter content based on selection
        const filter = this.dataset.apiFilter;
        console.log('Filter by:', filter);
    });
});

// Movie card click handler
document.querySelectorAll('.movie-card').forEach(card => {
    card.addEventListener('click', function() {
        console.log('Movie clicked:', this.querySelector('[data-api-movie-title]').textContent);
    });
});

// Hero section actions
function playContent() {
    console.log('Play content clicked');
}

function showInfo() {
    console.log('Show info clicked');
}

// Search functionality
const searchInput = document.querySelector('.search-input');
searchInput.addEventListener('input', function() {
    const query = this.value;
    if (query.length > 2) {
        console.log('Search for:', query);
    }
});

// API Integration Helper Functions
function loadSidebarIcons() {
    // Fetch sidebar icons from API and update UI
}

function loadHeroContent() {
    // Fetch hero section content from API
}

function loadMovies(filter = 'all') {
    // Fetch movies from API based on filter
}

function updateLabels() {
    // Fetch all UI labels from API
}

// Initialize dashboard
document.addEventListener('DOMContentLoaded', function() {
    loadSidebarIcons();
    loadHeroContent();
    loadMovies();
    updateLabels();
});

// Responsive handling
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        document.getElementById('sidebar').classList.remove('open');
    }
});