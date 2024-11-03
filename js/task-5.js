const body = document.querySelector("body");
const spanColor = document.querySelector(".color");
const btn =  document.querySelector(".change-color");

btn.addEventListener("click", handleClick)

function handleClick(event) {
    body.style =`background-color: ${getRandomHexColor()}`; 
    spanColor.textContent = getRandomHexColor();
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  