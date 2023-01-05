const body = document.querySelector('body');
const button = document.querySelector('#button');

const gridContainer = document.createElement('div');
gridContainer.classList.add('grid-container');

const rightContainer = document.querySelector('.right-container');
rightContainer.appendChild(gridContainer);    



let n = 0;
function setGrid() {
    button.addEventListener('click', () => {
        n = prompt("How many squares do you want per side?");
        createGrid(n);
        
        console.log(n);
        //klkllk
        const gridItem = document.querySelectorAll('.grid-item');
        gridItem.forEach(item => item.addEventListener('mouseover', (e) => {
            changeColor(e.target);
        }
        ));
        clear();
        
    })

    
    
}

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
function clear() {
        const div = document.querySelectorAll('.grid-item');
        div.forEach(i => gridContainer.removeChild(i));
        createGrid(n);
        const gridItem = document.querySelectorAll('.grid-item');
        gridItem.forEach(item => item.addEventListener('mouseover', (e) => {
            changeColor(e.target);
        }
        )); 
}
setGrid();

/*
problem: after clicking the 'click me' button once,
some of the squares will not work; they will be colored already and you can't change the color on them


if 'click me' button gets clicked more than once, call the clear function to delete the current grid 
and then call setgrid function to ask how they want the grid to be

!! Need to make the code neater and better! improve it !!!!!
*/