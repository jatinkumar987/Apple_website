// Add this script tag to your HTML file or include it in your main JavaScript file

document.addEventListener('DOMContentLoaded', function () {
    const watchImage = document.querySelector('.watch-image');
    const imageContainer = document.querySelector('.image-container');
  
    // Set the initial scale value
    let scale = 1;
  
    // Add a scroll event listener
    window.addEventListener('scroll', function () {
      // Calculate the scale value based on the scroll position
      scale = 1 + window.scrollY / window.innerHeight;
  
      // Apply the scale to the image
      watchImage.style.transform = `scale(${scale})`;
  
      // Optionally, limit the scale value to avoid excessive zoom
      if (scale > 3) {
        scale = 3;
      }
    });
  });
  