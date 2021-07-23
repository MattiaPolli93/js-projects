"use strict";

// Showing new quote
function newQuote() {
    // Random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

    // Checking if author is null and replacing with it "Unknown"
    if (quote.author === null) {
        authorText.textContent = "Unknown";
    } else {
        authorText.textContent = quote.author;
    }

    // Checking quote length for styling
    if (quote.text.length > 100) {
        quoteText.classList.add("long-quote");
    } else {
        quoteText.classList.remove("long-quote");
    }
    quoteText.textContent = quote.text;
}

// Tweeting quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, "_blank");
}