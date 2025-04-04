const DEFAULT_SIZE = 16;

const sketchArea = document.getElementById('sketch-area');

function setupGrid(size) {
    sketchArea.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    sketchArea.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement("div");
        gridElement.classList.add("grid-element");
        gridElement.style.border = "1px solid black"
        sketchArea.appendChild(gridElement);
    }
}

window.onload = () => {
    setupGrid(DEFAULT_SIZE);
};
