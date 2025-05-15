document.addEventListener('DOMContentLoaded', function() {
    const searchIcon = document.querySelector('.search-icon');
    const searchInput = document.getElementById('searchInput');

    if (searchIcon && searchInput) {
        searchIcon.addEventListener('click', function() {
            // Toggle the 'active' class to show/hide the search input
            searchInput.classList.toggle('active');
            if (searchInput.classList.contains('active')) {
                searchInput.focus(); // Focus the input field when it becomes visible
            }
        });

        // Optional: Handle search submission (e.g., on Enter key press)
        searchInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                const query = searchInput.value;
                if (query) {
                    // Implement your search logic here
                    // For example, redirect to a search results page:
                    // window.location.href = '/search?q=' + encodeURIComponent(query);
                    console.log('Search for:', query);
                    // You'd replace console.log with actual search functionality
                }
            }
        });
    }
});
