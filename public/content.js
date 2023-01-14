// Get all movies in Letterboxd movie list
const posterList = document.getElementsByClassName("poster-container");

// Add hover event listeners for each list item
let posterListLength = posterList.length;
for (let i = 0; i < posterListLength; i++) {
  // Scale movie on mouseenter
  posterList[i].addEventListener("mouseenter", e => {
    e.target.style.transform = "scale(1.5)";
  })
  
  // Remove scale on mouseleave
  posterList[i].addEventListener("mouseleave", e => {
    e.target.style.transform = "";
  })
}