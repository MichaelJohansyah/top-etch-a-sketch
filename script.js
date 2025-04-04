const DEFAULT_SIZE = 16;

const grid = document.getElementById("grid");
const clearBtn = document.getElementById("clearBtn");

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

clearBtn.onclick = () => reloadGrid();

function reloadGrid() {
    clearGrid();
    setupGrid(16);
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
        gridElement.addEventListener("mouseover", changeColor);
        gridElement.addEventListener("mousedown", changeColor);
        grid.appendChild(gridElement);
    }
}

function changeColor(e) {
    if (e.type === "mouseover" && !mouseDown) return;
    e.target.style.backgroundColor = "black";
}

window.onload = () => {
    setupGrid(DEFAULT_SIZE);
};
