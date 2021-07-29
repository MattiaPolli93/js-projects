"use strict";

const videoElement = document.getElementById("video");
const button = document.getElementById("button");

button.addEventListener("click", async () => {
    // Disable button
    button.disabled = true;
    // Start pic-in-pic
    await videoElement.requestPictureInPicture();
    // Reset button
    button.disabled = false;
});

// On load
selectMediaStream();