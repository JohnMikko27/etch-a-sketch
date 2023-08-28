//try to add eslint and other things to format and make code look better and cleaner


//maybe create a function that selects right container, creates grid container and then appends grid contaienr to right container
//and then the fucntions will just add grid items to the grid container   

export function setInitialGrid() {
    createGridContainer();
    createGrid(16);
}

function createGridContainer() {
    const gridContainer = document.createElement('div');
    const rightContainer = document.querySelector('.right-container');
    gridContainer.setAttribute('id', 'grid-container')

    rightContainer.appendChild(gridContainer);    
}

export function setGridSize() {
    clear();
    let size = prompt("How many squares do you want per side?");
    createGrid(size);
}

function createGrid(size) {
    const gridContainer = document.querySelector('#grid-container');
    
    for (let i = 0; i < size ** 2; i++) { 
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridContainer.appendChild(gridItem);
    }
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;   
    displayGrid(gridContainer);
}

function displayGrid(gridContainer) {
    const rightContainer = document.querySelector('.right-container');
    rightContainer.appendChild(gridContainer);  
}

function clear() {
    const gridContainer = document.querySelector('#grid-container');
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(gridItem => gridContainer.removeChild(gridItem));
}