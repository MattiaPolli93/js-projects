"use strict";

// Getting photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        // catching error
        alert("Error!!!");
        console.log(error);
    }
}