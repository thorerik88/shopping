const tokenKey = "token";
const userKey = "user";

export function saveUser(user) {
    saveToStorage(userKey, user)
}

export function saveToken(token) {
    saveToStorage(tokenKey, token);
}

export function getToken() {
    return getFromStorage(tokenKey)
}

export function clearStorage() {
    const doDelete = confirm("Are you sure?");
    if (!doDelete) {
        return
    } else {
        deleteStorage();
        location.href="/";
    }
    
}

function deleteStorage() {
    localStorage.clear();
}

function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

function getFromStorage(key) {
    const value = localStorage.getItem(key);
    if (!value) {
        return null;
    }
    return JSON.parse(value);
}