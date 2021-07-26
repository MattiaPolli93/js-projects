"use strict";

// Helper function to set attributes on DOM elements
function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

// Creating elements for links & photos, adding them to the DOM
function displayPhotos() {
    // Running function for each object in the array
    photosArray.forEach((photo) => {
        // Creating <a> to link to Unsplash
        const item = document.createElement("a");
        setAttributes(item, {
            href: photo.links.html,
            target: "_blank",
        });

        // Creating <img> for photo
        const img = document.createElement("img");
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description
        });

        // Putting <img> inside <a>, then putting both inside the imageContainer element
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}

// Getting photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos();
    } catch (error) {
        // catching error
        alert("Error!!!");
        console.log(error);
    }
}