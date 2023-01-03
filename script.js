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
        gridContainer.appendChild(div);
    }
}
createGrid();



/*
Set up a “hover” effect so that the grid divs change color when your mouse passes over them, 
leaving a (pixelated) trail through your grid like a pen would.
Hint: “Hovering” is what happens when your mouse enters a div and ends 
when your mouse leaves it. You can set up event listeners for either of those events as a starting point.
There are multiple ways to change the color of the divs, including:
adding a new class to the div.
changing the div’s background color using JavaScript.
*/

const gridItem = document.querySelectorAll('.grid-item');
gridItem.forEach(item => item.addEventListener('mouseover', (e) => {
    changeColor(e.target);
}
));

//create a hover event listener that changes the divs color when the mouse hovers it
// the function to run should be a function that adds a class to it which changes it color
function changeColor(x) {
    x.classList.toggle('change-color');
}
//create a class that changes the color of a div
//create an event listener that removes the color when there is no hover event