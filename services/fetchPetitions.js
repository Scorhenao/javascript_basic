
/**GET */

/**PROMISE */
/**ASYNC AWAIT RESPONSE PORMISE*/
export async function get(URL) {
    const response = await fetch(URL);//respuesta http a un servidor completo sin manejar
    return await response.json();//cambiar respuesta http a json
}

/**POST */
export async function post (URL, data){
    const response = await fetch(URL,{
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },//tipo de dato que se va a enviar
        body : JSON.stringify(data)
    })
}

