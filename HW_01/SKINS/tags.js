const themes = ["modern.css", "dark.css", "basic.css"];
let current = 0;

document.getElementById("theme-btn").addEventListener("click", () => {
    current = (current + 1) % themes.length; // move to next
    document.getElementById("theme-link").href = themes[current];
});
