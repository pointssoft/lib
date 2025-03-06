// in line no. 499 in public\marketpro\assets\js\main.js file
// add this code
// {
//   breakpoint: 1399,
//   settings: {
//     slidesToShow: 4,
//     arrows: false,
//   }
// },

function processExistingImages() {
    document.querySelectorAll(".product-card__thumb img").forEach((img) => {
        console.log("Processing existing images");
        if (!img.complete) {
            img.onload = () => cropAndResizeImage(img);
        } else {
            cropAndResizeImage(img);
        }
    });
}

function cropAndResizeImage(img) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    console.log(img);
    // Ensure 1:1 aspect ratio by cropping from center
    const size = Math.min(img.naturalWidth, img.naturalHeight);
    canvas.width = 250;
    canvas.height = 250;

    ctx.drawImage(
        img,
        (img.naturalWidth - size) / 2, // Crop X-axis
        (img.naturalHeight - size) / 2, // Crop Y-axis
        size,
        size,
        0,
        0,
        250,
        250
    );

    // Convert canvas to an image URL and replace the original image
    img.src = canvas.toDataURL("image/jpeg");
}

// Run this function when the page loads
window.addEventListener("DOMContentLoaded", processExistingImages);
