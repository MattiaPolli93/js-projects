"use strict";

// Unsplash API
const count = 10;

const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

// On load
getPhotos();