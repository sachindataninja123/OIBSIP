const displayInPut = document.getElementById("input-box");
const buttons = document.querySelectorAll("button");

//By Click Event
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerText === "=") {
      calculate();
    } else if (e.target.innerText === "AC") {
      clearDisplay();
    } else if (e.target.innerText === "DEL") {
      deleteLast();
    } else {
      handleInput(e.target.innerText);
    }
  });
});

// By Keyboard Event
document.addEventListener("keydown", (e) => {
  const key = e.key;

  if (!isNaN(key) || ["+", "-", "*", "/",".","%"].includes(key)) {
    handleInput(key);
  } else if (key === "Delete" || key === "Escape") {
    clearDisplay();
  } else if (key === "Backspace") {
    deleteLast();
  } else if (key === "Enter") {
    calculate();
  }
});

function calculate() {
  displayInPut.value = eval(displayInPut.value);
}
function clearDisplay() {
  displayInPut.value = "";
}
function deleteLast() {
  displayInPut.value = displayInPut.value.slice(0, -1);
}
function handleInput(value) {
  displayInPut.value += value;
}
