export function displayMessage(messageType, message, targetElement) {
    const element = document.querySelector(targetElement);
    element.innerHTML = `<div class="message ${messageType}">${message}</div>`;
}

export function removeMessage(targetElement) {
    setTimeout(() => {
        document.querySelector(targetElement).innerHTML = "";
    }, 3000)
}