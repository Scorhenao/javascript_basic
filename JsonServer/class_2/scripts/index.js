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

/**Cada que se regenere la pagina se hara esto */
document.addEventListener("DOMContentLoaded",()=>(paintUsers()))

form.addEventListener("submit",(e) =>{
    e.preventDefault()//prevenir regarga de pagina
    
    insert();
})


insert = () =>{

    const name = nameInput.value;
    const age = ageInput.value;

    if (empty(name) || !isAge(age)) {
        return;
    }

    console.log("Nombre: "+ name + " Edad: " +age)
}

empty = (valor) =>{
    //s para buscar un espacio vacio o un enter
    if (/^\s*$/.test(valor)) {
        alert("Por favor llene todos los campos sin espacios");
        return true;
    }return false;
}

isAge = (age) =>{
    if (age>0 && age<110) {
        return true;
    }else if(age>110){
        alert("No creo que seas humano")
    }else{
        alert("Edad invalida")
    }
    return false;
}
paintUsers = () =>{
    users.forEach((user)=>{
        /**Forma larga sin posibles errores */
        const tr = document.createElement("tr");
        
        const tdId = document.createElement("td");
        const tdName = document.createElement("td");
        const tdAge = document.createElement("td");
        
        tdId.textContent = user["id"];
        tdName.textContent = user["name"];
        tdAge.textContent = user["age"];
        
        tr.append(tdId,tdName,tdAge);
        
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