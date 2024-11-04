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
    if (counterValue < 1 || counterValue > 100) {
        return;
    }

    let width = 30;
    let height = 30;
    let markup = "";

    for (let i = 1; i <= counterValue; i += 1) {
        const color = getRandomHexColor();
        markup += `<div style="width: ${width}px; height: ${height}px; background-color: ${color};"></div>`;
        
        width += 10;
        height += 10;
    }

    boxes.innerHTML = markup;
    input.value = "";
    counterValue = 0;
}

function destroyBoxes() {
    boxes.innerHTML = "";
    input.value = "";
    counterValue = 0;
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
}
  
