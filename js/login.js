import { saveUser, saveToken } from "./utils/storage.js";
import { baseUrl } from "./settings/baseUrl.js";
import { displayMessage } from "./common/displayMessage.js";
import createMenu from "./common/createMenu.js";

createMenu();



const form = document.querySelector("form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const message = document.querySelector(".message-container");   

form.addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    const usernameValue = username.value;
    const passwordValue = password.value;
    
    message.innerHTML = "";

    if (usernameValue.length === 0 || passwordValue.length === 0) {
        return displayMessage("warning", "One or more fields are empty", ".message-container")
    }

    login(usernameValue, passwordValue);
    // location.href="/";
}

async function login(username, password) {
    const url = baseUrl + "auth/local";
    
    const data = JSON.stringify({ identifier: username, password: password })

    const options = {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
        }
    }

    try {
        const response = await fetch(url, options);
        const details = await response.json();
        console.log(details.user)
        console.log(details.error)
        message.innerHTML = "";
        if (details.user) {
            saveToken(details.jwt);
            saveUser(details.user);
            location.href="/index.html";
        }

        if (details.error) {
            displayMessage("warning", details.error + " username and/or password invalid, please try again", ".message-container");
            document.querySelector("#username").value = "";
            document.querySelector("#password").value = "";
        }
       
        

    }
    catch(error) {
        displayMessage("error", error, ".message-Container");
    }
    
}