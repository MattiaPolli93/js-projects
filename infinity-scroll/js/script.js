"use strict";

const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

// On load
let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let onLoad = true;
let photosArray = [];

// Unsplash API
let initialCount = 5; // Number of images loaded initially
let apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${initialCount}` // Loading random images

// When loading - displaying 5 images
getPhotos();

// If scrolling is near bottom page, load more photos
window.addEventListener("scroll", () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
        ready = false;
        getPhotos();
    }
});