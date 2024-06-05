import { URL_USERS } from "../services/routes.js";
import { getAll, post, } from "../services/services.js";
import { editById, deleteById } from "../services/services.js";

const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const  form = document.querySelector("form");
/**Buscando desde el padre al hijo*/
const tableUser = document.querySelector(".tableUser");
const tableBody = tableUser.querySelector("tbody");
/**Buscando el elemento en concreto */
const contentTable = document.querySelector(".contentTable");
/**Bucando cantidad de hijos */
// console.log(tableUser.children[2]);
const btnAdd = document.querySelector(".btnAdd");
const modelTitle = document.querySelector(".modal-title");

/**Cada que se regenere la pagina se hara esto */
document.addEventListener("DOMContentLoaded",()=>(paintUsers()))

btnAdd.addEventListener("click", ()=>{
    form.setAttribute("data-status", "add");
    modelTitle.textContent = "agregar nuevo usuario";
    form.reset();
})

form.addEventListener("submit",(e) =>{
    e.preventDefault()//prevenir regarga de pagina
    
    insert();
})

const insert = () =>{
    const name = nameInput.value;
    const age = ageInput.value;

    if (empty(name) || !isAge(age)) {
        return;
    }
    // const data ={name,age}
    /**
     * data = {
     * "name" : nameInput.value,
     * "age" : ageInput.value,
     * }
     */

    if (form.getAttribute("data-status") == "add") {
        post(URL_USERS, {name,age})
    }else if(form.getAttribute("Data-status") == "edit"){
        editById(URL_USERS,form.getAttribute("data-id"),{name,age});
    }

    /**opcional para refrescar inputs del formulario
     * form.reset();
     * paintUsers();
     */
}

const empty = (valor) =>{
    //s para buscar un espacio vacio o un enter
    if (/^\s*$/.test(valor)) {
        alert("Por favor llene todos los campos sin espacios");
        return true;
    }return false;
}

const isAge = (age) =>{
    if (age>0 && age<110) {
        return true;
    }else if(age>110){
        alert("No creo que seas humano")
    }else{
        alert("Edad invalida")
    }
    return false;
}
const paintUsers  = async () =>{
    /**Informacion de DB */

    const users = await getAll(URL_USERS);

    users.forEach((user)=>{
        /**Forma larga sin posibles errores */
        const tr = document.createElement("tr");
        
        const tdId = document.createElement("td");
        const tdName = document.createElement("td");
        const tdAge = document.createElement("td");
        const tdEdit = document.createElement("td")
        const btnEdit = document.createElement("button")
        const tdDelete = document.createElement("td")
        const btnDelete = document.createElement("button")

        btnEdit.classList = "btn btn-warning me-0";
        btnEdit.setAttribute("data-bs-toggle", "modal")
        btnEdit.setAttribute("data-bs-target","#exampleModal")
        btnDelete.classList = "btn btn-danger";
        tdId.textContent = user["id"];
        tdName.textContent = user["name"];
        tdAge.textContent = user["age"];
        
        btnEdit.textContent = "Editar";
        btnDelete.textContent = "Eliminar";

        tdEdit.appendChild(btnEdit)
        tdDelete.appendChild(btnDelete)

        tr.append(tdId,tdName,tdAge,tdEdit,tdDelete);
        
        
        btnEdit.addEventListener("click", ()=>{
            form.setAttribute("data-status", "edit");
            form.setAttribute("data-id", user["id"]);
            modelTitle.textContent = "Editando usuario";

            nameInput.value = user["name"];
            ageInput.value = user["age"];
        })
        
        btnDelete.addEventListener("click",()=>{
            deleteById(URL_USERS,user["id"])
        })

        contentTable.appendChild(tr);
    })

    /**Forma corta con posibles errores*/
    // contentTable.innerHTML += `     
    // <!--tr son las filas-->
    // <tr>
    //     <!--td columnas de la fila-->
    //     <td>${user["id"]}</td>
    //     <td>${user["name"]}</td>
    //     <td>${user["age"]}</td>
    // </tr>`
}

