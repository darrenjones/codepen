// Global button id constants
const newArrayButton = document.getElementById("new-array-button");
const sortButton = document.getElementById("sort-button");
const cubesRadioButton = document.getElementById("cubes");
const verticalGradientRadioButton = document.getElementById(
"vertical-gradient");

const progress = document.getElementById("progress");

//Global constant - Number of items in the array
const items = 273;

// Global iterative variables and the array
let i, j, arr;

// Event listeners for buttons
// newArrayButton.addEventListener("click", () => drawRandom());
sortButton.addEventListener("click", () => bubbleSort(arr));
cubesRadioButton.addEventListener("click", () => drawSorted());
verticalGradientRadioButton.addEventListener("click", () => drawSorted());

// Reset percentage to zero
newArrayButton.addEventListener("click", () => {
  progress.value = 0;
  drawRandom();
});

// Draws a random array of hex colors given a CSS class from visualRadioType()
function drawRandom() {
  const graph = visualRadioType();
  let container = document.getElementById("container");
  container.innerHTML = "";
  arr = new Array();
  for (i = 0; i < items; i++) {
    arr.push(randColor());
    let bar = document.createElement("div");
    bar.innerHTML =
    '<div id="c-' +
    arr[i] +
    '"; style="background: #' +
    arr[i] +
    '"; class="' +
    graph +
    '"></div>';
    document.getElementById("container").appendChild(bar);
  }
}

// Draws the sorted array of hex colors
function drawSorted() {
  const graph = visualRadioType();
  let container = document.getElementById("container");
  container.innerHTML = "";
  for (i = 0; i < items; i++) {
    let bar = document.createElement("div");
    bar.innerHTML =
    '<div id="c-' +
    arr[i] +
    '"; style="background: #' +
    arr[i] +
    '"; class="' +
    graph +
    '"></div>';
    document.getElementById("container").appendChild(bar);
  }
}

// Sorts the order of hex values in the array
// TODO - implement separate swap method to extract DOM manipulation
function bubbleSort(argArray) {
  let temp, tempId, secondId;
  for (i = 0; i < argArray.length; i++) {
    (function (i) {
      setTimeout(function () {
        document.getElementById("container").append("\n");
        for (j = 0; j < argArray.length - i; j++) {
          if (argArray[j + 1] > argArray[j]) {
            temp = argArray[j];
            tempId = document.
            getElementById("c-" + argArray[j]).
            getAttribute("id");
            secondId = document.
            getElementById("c-" + argArray[j + 1]).
            getAttribute("id");
            argArray[j] = argArray[j + 1];
            document.
            getElementById("c-" + argArray[j]).
            setAttribute("id", secondId);
            document.getElementById("c-" + argArray[j]).style.backgroundColor =
            "#" + secondId.slice(2);
            argArray[j + 1] = temp;
            document.
            getElementById("c-" + argArray[j + 1]).
            setAttribute("id", tempId);
            document.getElementById(
            "c-" + argArray[j + 1]).
            style.backgroundColor = "#" + tempId.slice(2);
            drawSorted(visualRadioType());
          }
          document.querySelector(".percentage").innerHTML = Math.floor(
          Math.abs(100 - j / items * 100));

          progress.value = Math.floor(Math.abs(100 - j / items * 100));
        }
      }, 10 * i);
    })(i);
  }
  return argArray;
}

// Returns a hex value (gets a monochrome color)
function randColor() {
  return (
    Math.floor(Math.random() * 16777215).
    toString(16).
    slice(0, 2) + "0000");

}

// Loops through radio buttons to determine which is currently selected
function visualRadioType() {
  const visualRadioButtons = document.querySelectorAll(
  'input[name="visual-radio"]');

  for (const button of visualRadioButtons) {
    if (button.checked) {
      return button.value;
    }
  }
}

// Initializes the UI
const init = () => {
  drawRandom();
};
init();

// TODO - Disable buttons during sort, change Sort button to break out of the sorting loop
function toggleDisable() {
  const inputs = document.querySelectorAll("input, button");
  for (const input of inputs) {
    if (!input.disabled) {
      input.disabled = true;
    } else {
      input.disabled = false;
    }
  }
}

//TODO Add a BREAK for the New Array button bug!

//TODO Refactor to OO

//TODO Think of more visualization ideas

//TODO function quickSort() {}

//TODO function mergeSort() {}

//TODO function selectionSort() {}

//TODO function quickSort() {}

//TODO Big O notation time and space complexity

//TODO Running count, acceration, etc.

//TODO Progress bar

//TODO Velocity / Acceeration / Time / Waves

//TODO Color picker

//TODO Number of elements picker

//TODO Comparison tables and/or multi-threaded races between algorithms

//TODO Snippets of info fade-in fade-out - several paragraphs to read while watching or getting bored watching the sorting i.e. fun facts about who wrote the algorithms, the year, variations, Turing machines, Von Neumann, etc. etc.

//TODO UI/UX/Responsive Design & App

//TODO Unit tests