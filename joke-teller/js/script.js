"use strict";

const button = document.getElementById("btn");
const audioElement = document.getElementById("audio");

// Get Jokes from JokeAPI
async function getJokes() {
    let joke = "";
    const apiUrl = "https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,racist,sexist";
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        // Two-part Joke
        if (data.setup) {
            joke = `${data.setup} ... ${data.delivery}`;
        } else { // One-part Joke
            joke = data.joke;
        }
        // Text-to-Speech
        tellMe(joke);
        // Disable Button
        toggleButton();
    } catch (error) {
        console.log("Sorry", error);
    }
}

// Event Listeners
button.addEventListener("click", getJokes);
audioElement.addEventListener("ended", toggleButton);