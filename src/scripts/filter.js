import { renderizaObject } from "./renderiza.js";

export function filterButtons (){
    const buttonAll = document.querySelector(".todos");
    const buttonEntry = document.querySelector(".entrada");
    const buttonExit = document.querySelector(".saida");

    buttonEntry.addEventListener('click', (e) =>{

        const filteredObject = insertedValues.filter(obj => obj.categoryID === 0)
        renderizaObject(filteredObject);
        
    })

    buttonExit.addEventListener('click', (e) =>{

        const filterObjectOne = insertedValues.filter(obj => obj.categoryID === 1)
        renderizaObject(filterObjectOne);

    })

    buttonAll.addEventListener('click', (e) => {

        renderizaObject(insertedValues);

    })

};

   

