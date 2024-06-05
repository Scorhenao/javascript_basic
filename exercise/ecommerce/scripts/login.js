import { URL_USERS } from "../services/routes.js";
import { getAll } from "../services/services.js";

const formLogin = document.querySelector(".formLogin");
const emailInput = document.querySelector("#loginEmail");
const passwordInput = document.querySelector("#loginPassword");

formLogin.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = emailInput.value;
    await validation(email);
})

const validation = async (email) => { // Agregamos 'email' como parámetro
    const data = await getAll(`${URL_USERS}?email=${email}`);

    if (data.length == 0) {
        alert("credenciales inválidas (email)");
        return;
    }
    
    if (data[0]["password"] !== passwordInput.value) {
        alert("credenciales inválidas (password)");
        return;
    }
    
    localStorage.setItem("nameUser", data[0]["name"]);
    window.location.href = "../index.html";
}
