export function setInitialGrid() {
    createGridContainer();
    displayGrid(createGrid(16));
}

export function setGridSize() {
    clear();
    let size = prompt("How many squares do you want per side?");
    createGrid(size);
}

function createGridContainer() {
    const gridContainer = document.createElement('div');
    const rightContainer = document.querySelector('#right-container');
    gridContainer.setAttribute('id', 'grid-container')
    rightContainer.appendChild(gridContainer);    
}

function createGrid(size) {
    const gridContainer = document.querySelector('#grid-container');
    
    for (let i = 0; i < size ** 2; i++) { 
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridContainer.appendChild(gridItem);
    }
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;   
    return gridContainer;
}

function displayGrid(gridContainer) {
    const rightContainer = document.querySelector('#right-container');
    rightContainer.appendChild(gridContainer);  
}

function clear() {
    const gridContainer = document.querySelector('#grid-container');
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(gridItem => gridContainer.removeChild(gridItem));
}