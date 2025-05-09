// Function to save data in localStorage
function savePreference(key, value) {
  localStorage.setItem(key, value);
}

// Function to retrieve data from localStorage
function getPreference(key) {
  return localStorage.getItem(key);
}

// Add event listener for DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("button");
  const images = document.querySelectorAll(".image-gallery img");

  // Retrieve user preference and apply it
  const userPreference = getPreference("buttonClicked");
  if (userPreference === "true") {
    button.classList.add("animate");
  }

  // Add click event to trigger animation and save preference
  button.addEventListener("click", () => {
    button.classList.add("animate");

    // Save user preference
    savePreference("buttonClicked", "true");

    // Remove animation class after animation ends
    button.addEventListener("animationend", () => {
      button.classList.remove("animate");
    });
  });

  // Automatically cycle through images
  let currentIndex = 0;
  setInterval(() => {
    images.forEach((img, index) => {
      img.style.opacity = index === currentIndex ? "1" : "0";
    });
    currentIndex = (currentIndex + 1) % images.length;
  }, 2000); // Change image every 2 seconds
});