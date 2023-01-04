const body = document.querySelector('body');
const button = document.querySelector('#button');

const gridContainer = document.createElement('div');
gridContainer.classList.toggle('.right-container');
body.appendChild(gridContainer);    






function setGrid() {
    let n = 2
    button.addEventListener('click', () => {
        n = prompt("How many squares do you want per side?");
        createGrid(n);

        const gridItem = document.querySelectorAll('.grid-item');
        gridItem.forEach(item => item.addEventListener('mouseover', (e) => {
            changeColor(e.target);
        }
        ));

        gridItem.forEach(item => item.addEventListener('mouseout', (e) => {
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
        div.classList.toggle('grid-item')
        gridContainer.appendChild(div);
    }
}




//create a hover event listener that changes the divs color when the mouse hovers it
// the function to run should be a function that adds a class to it which changes it color
function changeColor(x) {
    x.classList.toggle('change-color');
}




