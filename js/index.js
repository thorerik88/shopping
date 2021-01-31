import createMenu from "./common/createMenu.js";
import { getToken } from "./utils/storage.js";
import { displayMessage, removeMessage } from "./common/displayMessage.js";

const container = ".message-container";

createMenu();

const token = getToken();

if (token) {
    displayMessage("success", "You are logged in", container);
    removeMessage(container)
}

