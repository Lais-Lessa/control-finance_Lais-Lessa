
export function renderizaObject(array){

    const renderMainList = document.querySelector(".main__list");
    renderMainList.innerHTML = "";

    array.forEach (obj => {


        const cardLi = document.createElement("li");
        cardLi.classList.add("card");
        const cardSpan = document.createElement("span");
        cardSpan.classList.add("value");
        const cardDiv = document.createElement("div");
        cardDiv.classList.add("category__entry");
        const divSpan = document.createElement("span");
        divSpan.classList.add("entry");
        const cardButton = document.createElement("button");
        cardButton.classList.add("button__exit");
        const cardIcon = document.createElement("icon");
        cardIcon.classList.add("fa-solid", "fa-trash", "card__icon");
        
        cardDiv.appendChild(divSpan);
        cardDiv.appendChild(cardButton);
        cardButton.appendChild(cardIcon)
        cardLi.appendChild(cardSpan);
        cardLi.appendChild(cardDiv);
        renderMainList.appendChild(cardLi);
        
        
        cardLi.id = obj.id;
        cardSpan.textContent = obj.value;
        cardSpan.textContent = "R$ " + obj.value;
        divSpan.textContent = valuesCategory[obj.categoryID];
        
        
    });
    
    remove();
    valuesSum(array);
};

function remove(){
    const buttonRemove = document.querySelectorAll(".button__exit");

    buttonRemove.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const objectRemoved = e.target.closest(".card")
            const objectIndex = Array.from(objectRemoved.parentElement.children).indexOf(objectRemoved)
            insertedValues.splice(objectIndex, 1);
            objectRemoved.remove()
            if(insertedValues.length === 0){
                const emptyValues = document.getElementById("div-empty")
                emptyValues.classList.remove("div__empty-none")
                emptyValues.classList.add("div__empty")
            }
            valuesSum(insertedValues);

        })
    })
   
}

function valuesSum (array){
    const valueSum = document.querySelector('.app__sum-value');
    const total = array.reduce((acumulador, {value}) => acumulador + value,0)
    valueSum.textContent = "R$" + total;
}