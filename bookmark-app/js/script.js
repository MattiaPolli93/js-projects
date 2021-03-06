"use strict";

const modal = document.getElementById("modal");
const modalShow = document.getElementById("show-modal");
const modalClose = document.getElementById("close-modal");
const bookmarkForm = document.getElementById("bookmark-form");
const websiteNameEl = document.getElementById("website-name");
const websiteUrlEl = document.getElementById("website-url");
const bookmarksContainer = document.getElementById("bookmarks-container");

let bookmarks = {};

// Show Modal, Focus on Input
function showModal() {
    modal.classList.add("show-modal");
    websiteNameEl.focus();
}

// Validate Form
function validate(nameValue, urlValue) {
    const expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g;
    const regex = new RegExp(expression);

    if (!nameValue || !urlValue) {
        alert("Please submit values for both fields");
    } 
    
    if (!urlValue.match(regex)) {
        alert("Please provide a valid web address!");
        return false;
    }

    // Valid
    return true;
}

function buildBookmarks() {
    bookmarksContainer.textContent = "";

    // Build items
    Object.keys(bookmarks).forEach(id => {
        const { name, url } = bookmarks[id];

        const item = document.createElement("div");
        item.classList.add("item");

        const closeIcon = document.createElement("i");
        closeIcon.classList.add("fas", "fa-trash-alt");
        closeIcon.setAttribute("title", "Delete Bookmark");
        closeIcon.setAttribute("onclick", `deleteBookmark("${id}")`);

        const linkInfo = document.createElement("div");
        linkInfo.classList.add("name");

        const favicon = document.createElement("img");
        favicon.setAttribute("src", `https://s2.googleusercontent.com/s2/favicons?domain=${url}`);
        favicon.setAttribute("alt", "Favicon");
        favicon.classList.add("name__img");

        const link = document.createElement("a");
        link.classList.add("name__link");
        link.setAttribute("href", `${url}`);
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noreferrer");
        link.textContent = name;

        linkInfo.append(favicon, link);
        item.append(closeIcon, linkInfo);
        bookmarksContainer.appendChild(item);
    });
}

function fetchBookmarks() {
    if (localStorage.getItem("bookmarks")) {
        bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    } else {
        const id = "https://books.google.com";
        bookmarks[id] = {
            name: "Mattia",
            url: "https://books.google.com"
        }

        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    }

    buildBookmarks();
}

function deleteBookmark(id) {
    if (bookmarks[id]) {
        delete bookmarks[id];
    }

    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    fetchBookmarks();
}

function storeBookmark(e) {
    e.preventDefault();
    const nameValue = websiteNameEl.value;
    let urlValue = websiteUrlEl.value;

    if (!urlValue.includes("https://")) {
        urlValue = `https://${urlValue}`;
    }

    if (!validate(nameValue, urlValue)) return false;

    const bookmark = {
        name: nameValue,
        url: urlValue
    };
    bookmarks[urlValue] = bookmark;
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    fetchBookmarks();
    bookmarkForm.reset();
    websiteNameEl.focus();
}

// Modal Event Listeners
modalShow.addEventListener("click", showModal);
modalClose.addEventListener("click", () => modal.classList.remove("show-modal"));
window.addEventListener("click", (e) => (e.target === modal ? modal.classList.remove("show-modal") : false));

// Event Listeners
bookmarkForm.addEventListener("submit", storeBookmark);

// On Load, Fetch Bookmarks
fetchBookmarks();