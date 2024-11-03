const input = document.querySelector("#controls input");
const createBtn = document.querySelector("#controls button[data-create]");
const destroyBtn = document.querySelector("#controls button[data-destroy]");
const boxes = document.querySelector("#boxes");

input.addEventListener("input", handleInput);
createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

let counterValue = 0;

function handleInput(event) {
    counterValue = event.currentTarget.value;
    return counterValue;
}

function createBoxes() {
    let width = 30;
    let height = 30;

    for (let i = 1; i <= counterValue; i += 1) {
        const div = document.createElement("div");
        div.style.width = `${width}px`;
        div.style.height = `${height}px`;
        div.style.backgroundColor = getRandomHexColor();

        width += 10;
        height += 10;

        boxes.appendChild(div);
    }
}

createBoxes();

function destroyBoxes() {
    boxes.innerHTML = "";
    input.value = "";
}



function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  
