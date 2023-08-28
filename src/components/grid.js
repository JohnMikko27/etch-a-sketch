//try to add eslint and other things to format and make code look better and cleaner

function setInitialGrid() {
    createGrid(16);
    eventHandlers();
}

function setGridSize() {
    clear();
    let size = prompt("How many squares do you want per side?");
    createGrid(size);
}

function createGrid(size) {
    //might have to create a grid container instead of selecting it
    const gridContainer = document.querySelector('#grid-container');
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    for (let i = 0; i < size ** 2; i++) { 
        const gridItem = document.createElement('div');
        gridItem.classList.toggle('grid-item');
        gridContainer.appendChild(gridItem);
    }
    displayGrid();
}

function displayGrid() {
    clear();
    const rightContainer = document.querySelector('.right-container');
    const gridContainer = document.querySelector('#grid-container');
    rightContainer.appendChild(gridContainer);  
}

function clear() {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(gridItem => gridContainer.removeChild(gridItem));
}