const API_KEY = "AIzaSyC9lXdmrDG0J3lBkVi6EC9m8wuYrMhVddM"; // Replace with your YouTube Data API key
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
const resultsDiv = document.getElementById("results");

searchBtn.addEventListener("click", searchYouTube);

async function searchYouTube() {
    const query = searchInput.value.trim();
    if (!query) {
        alert("Please enter a search term.");
        return;
    }

    resultsDiv.innerHTML = "";

    try {
        const response = await fetch(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=8&q=${encodeURIComponent(query)}&key=${API_KEY}`
        );
        const data = await response.json();

        if (!data.items || data.items.length === 0) {
            resultsDiv.innerHTML = "<p>No results found.</p>";
            return;
        }

        data.items.forEach(item => {
            const videoId = item.id.videoId;
            const title = item.snippet.title;
            const thumbnail = item.snippet.thumbnails.medium.url;
            const channel = item.snippet.channelTitle;

            const card = document.createElement("div");
            card.classList.add("video-card");
            card.innerHTML = `
        <img src="${thumbnail}" alt="thumbnail">
        <span class="video-title" title="${title}">${title}</span>
        <p>Channel: ${channel}</p>
        <a href="https://www.youtube.com/watch?v=${videoId}" target="_blank">Watch</a><br>
        <button class="favBtn">Add to Favorites</button>
      `;
            resultsDiv.appendChild(card);
        });
    } catch (err) {
        console.error(err);
        resultsDiv.innerHTML = "<p>Error loading results.</p>";
    }
}
