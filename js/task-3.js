const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output")

  input.addEventListener("input", (event) => {
    const trimmedInput = event.target.value.trim();
    output.textContent = trimmedInput !== "" ? trimmedInput : "Anonymous";
});

