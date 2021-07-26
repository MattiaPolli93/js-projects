"use strict";

const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let photosArray = [];

// Unsplash API
const count = 10;

const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

// On load
getPhotos();