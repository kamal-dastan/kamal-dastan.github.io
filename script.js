// Get references to the marquee and text elements
const marquee = document.getElementById("marquee");
const firstText = document.querySelector(".moving-text");

// Wait for the first text to finish scrolling, then show the second text
marquee.addEventListener("finish", function () {
    marquee.innerHTML = `<span class="moving-text">Second Text</span>`;
});
