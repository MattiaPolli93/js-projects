"use strict";

const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");

// Buttons - Event Listeners
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");

// Preloading
const quoteContainer = document.getElementById("quote-container");
const loader = document.getElementById("loader");

// Storing response data
let apiQuotes = [];

// Getting Quotes from API
async function getQuotes() {
    // Preloading
    loading();

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

// Adding Event Listeners
twitterBtn.addEventListener("click", tweetQuote);
newQuoteBtn.addEventListener("click", newQuote);

// On Load
getQuotes();