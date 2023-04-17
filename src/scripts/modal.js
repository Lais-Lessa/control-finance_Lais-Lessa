
import { renderizaObject } from "./renderiza.js";


/* Desenvolva sua lógica aqui */
function handleModal() {
    const buttons = document.querySelectorAll(".header__button");
    const modalController = document.querySelector(".modal__controller");
buttons.forEach(btn =>{

    btn.addEventListener('click', () => {
        modalController.showModal();
        closeModal();
    });
})
}

handleModal();

function closeModal() {


    const buttonClose = document.querySelector(".modal__btn-close");
    const modalController = document.querySelector(".modal__controller");

    buttonClose.addEventListener('click', () => {
        modalController.close();
    });
};




function insertObject() {

    const buttonInsertValue = document.getElementById("btn_inputEntry");
    const inputEntry = document.getElementById("entry");
    const inputExit = document.getElementById("exit");


    //EVENTOS CHECKED DOS INPUTS RADIOS
    inputEntry.addEventListener("change", () => {
        if (inputEntry.checked) {
            inputExit.checked = false;
        }
    })
        
    inputExit.addEventListener("change", () => {
        if (inputExit.checked){
            inputEntry.checked = false;
        }
    })
        

    
    buttonInsertValue.addEventListener('click', (event) => {

        const inputCurrency = document.getElementById("currency").value;

        event.preventDefault();

        let category = "";
        if (inputEntry.checked) {
            category = 0;
        } else if (inputExit.checked) {
            category = 1;
        };
    
        if(inputCurrency == ""){
            alert("Digite um valor no campo abaixo!")
            return
        } 

        const objectValue = {
            id: insertedValues.length + 1,
            value: parseFloat(inputCurrency),
            categoryID: category
        };
       
        if(insertedValues.length === 0){
        const emptyValues = document.getElementById("div-empty")
        emptyValues.classList.remove("div__empty")
        emptyValues.classList.add("div__empty-none")
    }
    insertedValues.unshift(objectValue);
console.log(insertedValues)
        renderizaObject(insertedValues);

        const modalController = document.querySelector(".modal__controller");
        modalController.close();

})

const inputCurrency = document.getElementById("currency");
inputCurrency.addEventListener('keyup', (e) => {
    inputCurrency.value = inputCurrency.value.replace(/\D/g, "");
})

inputCurrency.addEventListener('input', (e) => {
    inputCurrency.value = inputCurrency.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
})


};

insertObject();

