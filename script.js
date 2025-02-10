// script.js

// Set a video background
const backgroundVideo = document.getElementById('background-video');
backgroundVideo.src = 'path/to/your/video.mp4'; // Replace with the path to your video

// Search the web function
const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');

searchButton.addEventListener('click', () => {
    const query = searchInput.value;
    if (query) {
        const searchUrl = `https://www.bing.com/search?q=${encodeURIComponent(query)}`;
        window.open(searchUrl, '_blank');
    }
});
