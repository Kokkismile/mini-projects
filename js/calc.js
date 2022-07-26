const calcScreen = document.querySelector(".calc-screen");
calcScreen.innerHTML = `<p>0</p>`;

const numberBtn = document.querySelectorAll("[data-number]");
const deleteBtn = document.querySelector("[data-delete]");
const additionBtn = document.querySelector("[data-addition]");
const substractBtn = document.querySelector("[data-substraction]");

const deleteButton = document.querySelector(".test-button");

console.log(numberBtn);

//PRINTING NUMBERS
numberBtn.forEach(button => {
    button.addEventListener("click", (event) => {
        console.log(event.target.dataset)
        calcScreen.innerHTML += `<p>${event.target.dataset.number}</p>`
    })
});

//PRINTING ADDITION 
additionBtn.addEventListener("click", (event) => {
    console.log(event.target.dataset.addition)
    calcScreen.innerHTML += `<p>${event.target.dataset.addition}</p>`
})

//CLEAR NUMBERS
deleteButton.onclick = function() {
    calcScreen.innerHTML = `<p>0</p>`
}