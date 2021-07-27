"use strict";

const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

// On load
let ready = false;
let imagesLoaded = 0;
let totalImages = 0;

let photosArray = [];

// Unsplash API
const count = 30; // Number of images loaded each time
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}` // Loading random images

// If scrolling is near bottom page, load more photos
window.addEventListener("scroll", () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
        ready = false;
        getPhotos();
    }
});

// On load
getPhotos();