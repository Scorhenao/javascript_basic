/**Contiene toda la logica de peticiones a la bd (.json) */
import { URL_USERS } from "./routes.js";

//lo unico que cambia en la promesa es la URL

/**funcion para obtener de una url */
export const  getAll = async (URL) =>{
    const response = await fetch(URL);
    return await response.json();
}

/**funcion para enviar a un endpoint */
export const post = async (URL, data) =>{
    // const response =//no es necesario
    await fetch(URL,{
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },//tipo de dato que se va a enviar
        body : JSON.stringify(data)
    })
}

/**funcion para eliminar Un registro, CUIDADO CON LA URL */
export const deleteById = async (URL,id) =>{
    await fetch(`${URL}/${id}`,{
        method : "DELETE"
    })
}

/**funcion para editar Un registro en un enpoint */

export const editById = async (URL, id, data) =>{
    await fetch(`${URL}/${id}`,{
        method : "PUT",
        headers : {
            "Content-Type" : "application/json"
        },//tipo de dato que se va a enviar
        body : JSON.stringify(data)
    })
}

//FORMA CORTA
// getAll = async (URL)=>{
//     return await fetch(URL).then(response => response.json())
// }
