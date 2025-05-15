document.addEventListener("DOMContentLoaded", function () {
  const dynamicImages = document.querySelectorAll(".dynamic-image");
  const dynamicTexts = document.querySelectorAll(".dynamic-text");
  let currentIndex = 0;
  const intervalTime = 30000; // Time in milliseconds between changes

  function showSlide(indexToShow) {
    // Hide all images and texts by removing 'active' class
    dynamicImages.forEach((img) => img.classList.remove("active"));
    dynamicTexts.forEach((txt) => txt.classList.remove("active"));

    // Show the specified image and text by adding 'active' class
    if (dynamicImages[indexToShow]) {
      dynamicImages[indexToShow].classList.add("active");
    }
    if (dynamicTexts[indexToShow]) {
      dynamicTexts[indexToShow].classList.add("active");
    }
  }

  function nextSlide() {
    if (dynamicImages.length === 0) return; // Do nothing if no images
    // Update index
    currentIndex = (currentIndex + 1) % dynamicImages.length;
    showSlide(currentIndex);
  }

  // Initial display
  if (dynamicImages.length > 0) {
    // Ensure texts are also handled if they exist and match image count
    if (dynamicTexts.length === dynamicImages.length) {
      showSlide(0); // Show the first image and its corresponding text
    } else {
      // Fallback to only show the first image if text setup is inconsistent
      dynamicImages.forEach((img, i) =>
        img.classList.toggle("active", i === 0)
      );
    }
  }

  // Set interval for changing content
  if (dynamicImages.length > 1) {
    setInterval(nextSlide, intervalTime);
  }
});
