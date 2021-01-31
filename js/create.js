import createMenu from "./common/createMenu.js";
import { getToken } from "./utils/storage.js";
import { baseUrl } from "./settings/baseUrl.js";
import { addItem, deleteItem } from "./utils/api.js";
import { displayMessage } from "./common/displayMessage.js";

const token = getToken();
const url = baseUrl + "shoppings";

if (!token) {
    location.href = "/";
}

const form = document.querySelector("form");
const item = document.querySelector("#item");
const container = document.querySelector(".add-list");
const message = document.querySelector(".message-container");

createMenu();

(async function() {
    try {
        const response = await fetch(url);
        const json = await response.json();

        if (json.length === 0) {
            displayMessage("", "Your list is empty, please add items", ".add-list")
        } else {
            json.forEach((item) => {
                displayItems(item.item, item.id);
            })
        }

        
        
    }
    catch(error) {
        displayMessage("error", error, ".message-container")
    }
    const deleteButtons = document.querySelectorAll(".delete");
    deleteButtons.forEach((button) => {
        button.addEventListener("click", deleteItem)
    })
})()

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (item.value.trim().length === 0) {
        return displayMessage("warning", "your input was empty", ".message-container")
    }
    message.innerHTML = "";
    addItem(item.value, item.id)
    location.href = "/create.html";
    
    
});

function displayItems(item, id) {
    container.innerHTML += `<li>${item}<span data-value="${id}"class="delete">X</span></li>`;  
}








