// Get all movies in Letterboxd movie list
const posterList = document.getElementsByClassName("poster-container");

// Add mouseenter event for each list item
let len = posterList.length;
for (let i = 0; i < len; i++) {
  posterList[i].addEventListener("mouseenter", (event) => {
    // highlight the mouseenter target
    event.target.style.transform = "scale(1.5)";
  
    // reset the size after a short delay
    setTimeout(() => {
      event.target.style.transform = "";
    }, 500);
  }, false);
}