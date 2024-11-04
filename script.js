// Appends numbers to the display
function appendNumber(number) {
  const display = document.getElementById("display");
  display.value += number;
}

// Appends operators to the display
function appendOperator(operator) {
  const display = document.getElementById("display");
  display.value += operator;
}

// Clears the entire display
function clearDisplay() {
  document.getElementById("display").value = "";
}

// Clears the last entry
function clearEntry() {
  const display = document.getElementById("display");
  const currentValue = display.value;
  const lastEntryIndex = currentValue.match(/[\d.]+$/)?.index; // Find last number's position

  if (lastEntryIndex != null) {
    display.value = currentValue.slice(0, lastEntryIndex);
  } else {
    display.value = "";
  }
}

// Deletes the last digit
function deleteDigit() {
  const display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

// Calculates the result of the current input
function calculateResult() {
  const display = document.getElementById("display");
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

// Calculates percentage of the current number
function calculatePercentage() {
  const display = document.getElementById("display");
  try {
    display.value = eval(display.value) / 100;
  } catch (error) {
    display.value = "Error";
  }
}
