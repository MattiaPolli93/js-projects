"use strict";

// Showing new quote
function newQuote() {
    // Random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote);
}