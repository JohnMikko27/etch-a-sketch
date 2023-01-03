/*
Create a webpage with a 16x16 grid of square divs.
Create the divs using JavaScript. 
Don’t try making them by hand with copy and pasting in your HTML file!
It’s best to put your grid squares inside another 
“container” div (which can go directly in your HTML).
*/

//create a function that creates our 16 x 16 grid
/*const body = document.querySelector('body');
const gContainer = document.createElement('div');

const info1 = document.createElement('div');
const info2 = document.createElement('div');
const info3 = document.createElement('div');
const info4 = document.createElement('div');


body.appendChild(gContainer);

gContainer.appendChild(info1);
gContainer.appendChild(info2);
gContainer.appendChild(info3);
gContainer.appendChild(info4);

info1.textContent = 'hi im 1'
info2.textContent = 'hi im 2'
info3.textContent = 'hi im 3'
info4.textContent = 'hi im 4'
*/
const body = document.querySelector('body');

const gridContainer = document.createElement('div');
gridContainer.classList.toggle('grid-container');
body.appendChild(gridContainer);    

gridContainer.style.gridTemplateColumns = `repeat(16, 1fr)`
gridContainer.style.gridTemplateRows = `repeat(16, 1fr)`


function createGrid() {
    for (let i = 0; i < 16 * 16; i++) {
        const div = document.createElement('div');
        div.classList.toggle('grid-item')
        div.textContent =  `hi I'm ${i}`;
        gridContainer.appendChild(div);
    }
}
createGrid();



