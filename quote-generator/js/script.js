"use strict";

let apiQuotes = [];

// Getting Quotes from API
async function getQuotes() {
    const apiUrl = "https://type.fit/api/quotes";
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        // Catching Error
        alert("Oops! Apparently something went wrong!");
    }
}

// On Load
getQuotes();