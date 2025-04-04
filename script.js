const DEFAULT_SIZE = 16;

let currentSize = DEFAULT_SIZE;

const grid = document.getElementById("grid");
const clearBtn = document.getElementById("clearBtn");
const changeBtn = document.getElementById("changeBtn");

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

clearBtn.onclick = () => reloadGrid();
changeBtn.onclick = () => changeSize();

function reloadGrid() {
    clearGrid();
    setupGrid(currentSize);
}

function clearGrid() {
    grid.innerHTML = "";
}

function setupGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement("div");
        gridElement.classList.add("grid-element");
        gridElement.style.border = "1px solid black";
        gridElement.addEventListener("mousedown", changeColor);
        gridElement.addEventListener("mouseover", changeColor);

        grid.appendChild(gridElement);
    }
}

function changeColor(e) {
    if (e.type === "mouseover" && !mouseDown) return;
    e.target.style.backgroundColor = "black";
}

function changeSize() {
    let value = prompt("What size do you want?");
    if (value > 1 && value <= 100) {
        setCurrentSize(value);
        updateSizeValue(value);
        reloadGrid();
    } else {
        alert("Please only between 2 to 100");
    }
}

function updateSizeValue(value) {
    grid.innerHTML = `${value} x ${value}`;
}

function setCurrentSize(newSize) {
    currentSize = newSize;
}

window.onload = () => {
    setupGrid(DEFAULT_SIZE);
};
