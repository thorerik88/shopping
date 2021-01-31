import { getToken, clearStorage } from "../utils/storage.js";


export default function createMenu() {

    const token = getToken();
    const container = document.querySelector(".nav-menu")

    const pathname = location.pathname;
    let logout = "";

    let authLink = `
        <li class="nav-item">
            <a class="nav-link ${pathname === "/login.html" ? "active" : ""}" href="login.html">Login</a>
        </li>
        `;

    if (token) {
        authLink = `
            <li class="nav-item">
                <a class="nav-link ${pathname === "/create.html" ? "active" : ""}" href="/create.html">Your List</a>
            </li>
            <li class="nav-item">
                <a class="nav-link logout" href="/index.html">Logout</a>
            </li>`;
    }

    container.innerHTML = `
    <li class="nav-item">
        <a class="nav-link ${pathname === "/index.html" ? "active" : ""}" href="index.html">Home</a>
    </li>
    ${authLink}
    ${logout}
    `;

    const logoutBtn = document.querySelector(".logout");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", clearStorage)
    }
}
