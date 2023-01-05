const body = document.querySelector('body');
const button = document.querySelector('#button');

const gridContainer = document.createElement('div');
gridContainer.classList.add('grid-container');

const rightContainer = document.querySelector('.right-container');
rightContainer.appendChild(gridContainer);    




function setGrid() {
    clear();
    let n = prompt("How many squares do you want per side?");
    createGrid(n);
    const gridItem = document.querySelectorAll('.grid-item');
    gridItem.forEach(item => item.addEventListener('mouseover', (e) => {
        changeColor(e.target);
    }
    ));
    
}

button.addEventListener('click', setGrid);

function createGrid(size) {
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (let i = 0; i < size ** 2; i++) { 
        const div = document.createElement('div');
        div.classList.toggle('grid-item');
        gridContainer.appendChild(div);
    }
}

function changeColor(element) {
    element.classList.toggle('change-color');
}


function clear() {
    const div = document.querySelectorAll('.grid-item');
    div.forEach(i => gridContainer.removeChild(i));
        
}


