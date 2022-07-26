const calcScreen = document.querySelector(".calc-screen");
calcScreen.innerHTML = `<p>0</p>`;

const numberBtn = document.querySelectorAll("[data-number]");
const deleteBtn = document.querySelector("[data-delete]");
const additionBtn = document.querySelector("[data-addition]");
const substractBtn = document.querySelector("[data-substraction]");

numberBtn.forEach(button => {
    button.addEventListener("click", () => {
        calcScreen.innerHTML = `<p>${numberBtn.data.number}</p>`
    })
})