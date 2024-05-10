const searchBox = document.getElementById('search-box');
const searchBtn = document.getElementById('search-btn');
const searchResults = document.getElementById('search-results');

searchBtn.addEventListener('click', () => {
  const searchTerm = searchBox.value;
  // Send an AJAX request to your server to retrieve the matching properties
  // Display the results in the searchResults div
});