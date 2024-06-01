// document.addEventListener("DOMContentLoaded", ()=>{
//     fetch("",{
        
//     })
// })

import { get, post } from "../services/fetchPetitions.js";
import { URL_USER } from "../JsonServer/route.js";

// // localStorage (Almacenamiento en Motor de busqueda, ademas este almacenamiento sera permanente siempre y cuando no lo borre o se desisntale el programa)

// const numero = 12;
// const lista = ["hola",true,3];
// const objeto = {
//     name : "Samuel",
//     clan : {
//         id : "1",
//         descripcion : "arieairhadoi awhieiohsbdaiwhi hdahwehi sdhawe ioha dw"
//     }
// };

// /******************************************************************************************************** */
// /**Insertar */
// //Guardar nueva informacion o editarla
// //localStorage.setItem("key","value")

// localStorage.setItem("name", "Samuel");
// //escribi mal
// localStorage.setItem("lastName", "cordova");
// /*Editar mala escritura*/
// localStorage.setItem("lastName", "cordoba");

// localStorage.setItem("numero",numero);
// localStorage.setItem("lista",lista);
// localStorage.setItem("objeto",JSON.stringify(objeto));//pasar objeto a texto

// /******************************************************************************************************** */
// /**Obtener */
// //localStorage.getItem("key")

// const nombre = localStorage.getItem("name");
// console.log(nombre);

// //objetiendo y accediendo a objeto
// let objetoLs = localStorage.getItem("objeto");
// //asi se ve que al objeter un objeto es un texto o string
// //console.log(typeof objetoLs)

// //pasar el texto a objeto
// objetoLs = JSON.parse(objetoLs);
// console.log(objetoLs);
// console.log(objetoLs["name"]);//la [] para llamar algo de un objeto debe ser segun el tipo de dato del objeto2

// console.log(JSON.parse(
//     `
//     [12,12]
//     `
// ));//transforma cualquier texto a el tipo de dato que es

// /******************************************************************************************************** */
// /**Eliminar */
// localStorage.removeItem("name");//segun la key

// //localStorage.clear()//eliminar todo

// // /**Simple activity by me*/
// // const titulo = document.getElementById("title")

// // if (titulo === undefined || titulo === null) {
// //     titulo.textContent = title
// // }
// // //agarrar el submit de un formulario
// // const formulario = document.querySelector("form");
// // formulario.addEventListener("submit",(e)=>{
// //     e.preventDefault();
// //     const title = document.querySelector("input").value;
// //     console.log(title)
// //     localStorage.setItem("title",title)
// //     titulo.textContent = title
// // })

/**simple activity by antony */
const form = document.querySelector(".formulario");
const inputTitle = document.getElementById("inputTitle");
const title = document.querySelector(".title");

form.addEventListener("submit", () => {
    
    const info = inputTitle.value;

    post(URL_USER, {
        "name": info
    })
})

document.addEventListener("DOMContentLoaded", async ()=>{
    // const titleLs = localStorage.getItem("title") //localStorage
    const titleLs = await get(URL_USER);

    console.log(titleLs);
    
    if (titleLs) {
        title.textContent = titleLs[0]["name"]
    }
})