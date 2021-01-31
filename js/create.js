import createMenu from "./common/createMenu.js";
import { getToken } from "./utils/storage.js";
import { baseUrl } from "./settings/baseUrl.js";
import { addItem, deleteItem } from "./utils/api.js";

const token = getToken();
const url = baseUrl + "shoppings";

if (!token) {
    location.href = "/";
}

const form = document.querySelector("form");
const item = document.querySelector("#item");
const container = document.querySelector(".add-list");


createMenu();

(async function() {
    try {
        const response = await fetch(url);
        const json = await response.json();

        json.forEach((item) => {
            displayItems(item.item, item.id);
        })
        
    }
    catch(error) {
        console.log(error)
    }
    const deleteButtons = document.querySelectorAll(".delete");
    deleteButtons.forEach((button) => {
        button.addEventListener("click", deleteItem)
    })
})()

form.addEventListener("submit", (e) => {
    e.preventDefault();
    addItem(item.value, item.id)
    location.href = "/create.html";
});

function displayItems(item, id) {
    container.innerHTML += `<li>${item}<span data-value="${id}"class="delete">X</span></li>`;  
}








