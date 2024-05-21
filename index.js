

//getting element in HTML to print numbers
const display = document.getElementById("display");

//function to print numbers and results in the display in HTML
function appendToDisplay(input) {
    display.value += input;
}

//function to clear display
function clearDisplay() {
    display.value = ""
}


function calculate() {
    try {

        display.value = eval(display.value)
    }
    catch (error) {
        display.value = "error"
    }
}

//function to use keyboard
function handleKeyboardInput(event) {
    const key = event.key;
    if ((key >= '0' && key <= '9') || key === '.') {
        appendToDisplay(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        display.value = display.value.slice(0, -1);
    } else if (key === 'Escape') {
        clearDisplay();
    }
}

// Add event listener for keydown
document.addEventListener('keydown', handleKeyboardInput);
