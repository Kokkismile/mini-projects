const calcScreen = document.querySelector(".calc-screen");
calcScreen.innerHTML = `<p>0</p>`;

const numberBtn = document.querySelectorAll("[data-number]");
const deleteBtn = document.querySelector("[data-delete]");
const additionBtn = document.querySelector("[data-addition]");
const substractBtn = document.querySelector("[data-substraction]");

//TESTBUTTON
const testButton = document.querySelector(".test-button");

console.log(numberBtn);

numberBtn.forEach(button => {
    button.addEventListener("click", (event) => {
        console.log(event.target.dataset)
        calcScreen.innerHTML += `<p>${event.target.dataset.number}</p>`
    })
});

testButton.onclick = function() {
    calcScreen.innerHTML = `<p>${testButton.innerHTML}</p>`
}