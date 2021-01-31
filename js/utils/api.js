import { getToken } from "./storage.js";
import { baseUrl } from "../settings/baseUrl.js";

const token = getToken();


export async function addItem(item) {
    const url = baseUrl + "shoppings/";

    const data = JSON.stringify({ item: item })

    const options = {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    }
    try {
        const response = await fetch(url, options);
        const json = await response.json();

        
    }
    catch(error) {
        console.log(error)
    }
}


export async function deleteItem() {
    const id = this.dataset.value;
    const url = baseUrl + "shoppings/" + id;
    
    const options = {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    try {
        const response = await fetch(url, options);
        const json = await response.json();

        console.log(json)
        location.href="/create.html"
    }
    catch(error) {
        console.log(error)
    }
}