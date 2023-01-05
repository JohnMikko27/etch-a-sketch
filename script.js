const body = document.querySelector('body');
const button = document.querySelector('#button');

const gridContainer = document.createElement('div');
gridContainer.classList.toggle('grid-container');

const rightContainer = document.querySelector('.right-container');
rightContainer.appendChild(gridContainer);    

const clearButton = document.querySelector('#clear-button');


function setGrid() {
    button.addEventListener('click', () => {
        let n = prompt("How many squares do you want per side?");
        createGrid(n);

        //klkllk
        const gridItem = document.querySelectorAll('.grid-item');
        gridItem.forEach(item => item.addEventListener('mouseover', (e) => {
            changeColor(e.target);
        }
        ));

        
    })
    
}
setGrid();
function createGrid(size) {
    for (let i = 0; i < size ** 2; i++) {
        gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`
        gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`
        const div = document.createElement('div');
        div.classList.toggle('grid-item');
        gridContainer.appendChild(div);
    }
}

function changeColor(element) {
    element.classList.toggle('change-color');
}

//i need to clear the grid container

clearButton.addEventListener('click', () => {
    const div = document.querySelectorAll('.grid-item');
    div.forEach(i => gridContainer.removeChild(i));
 
})


