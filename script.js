const body = document.querySelector('body');
const button = document.querySelector('#button');

const gridContainer = document.createElement('div');
gridContainer.classList.add('grid-container');

const rightContainer = document.querySelector('.right-container');
rightContainer.appendChild(gridContainer);    

const rainbowButton = document.querySelector('#rainbow-button');
const redColor = document.querySelector('.red');
const blueColor = document.querySelector('.blue');
const greenColor = document.querySelector('.green');
const yellowColor = document.querySelector('.yellow');
const orangecolor = document.querySelector('.orange');
const purpleColor = document.querySelector('.purple');
const blackColor = document.querySelector('.black');
const whiteColor = document.querySelector('.white');

//will be set when colored-divs are clicked
let color;

button.addEventListener('click', setGrid);

initialGrid();

//Creates initial grid
function initialGrid() {
    clear();
    createGrid(16);
    eventHandlers();
}

function setGrid() {
    clear();
    let n = prompt("How many squares do you want per side?");
    createGrid(n);
    //you have to click on the grid container first, and then choose your color
    //!!! wrong, I want it so that you can click on the color first, and then choose when to color it after clicking
    

}

function eventHandlers() {
    
    rainbowButton.addEventListener('click', hoverRainbowColor);

    redColor.addEventListener('click', () => {
        color = 'red';
        hoverColor();
    });

    blueColor.addEventListener('click', () => {
        color = 'blue';
        hoverColor();
    });

    greenColor.addEventListener('click', () => {
        color = 'green';
        hoverColor();
    });

    yellowColor.addEventListener('click', () => {
        color = 'yellow';
        hoverColor();
    });

    orangecolor.addEventListener('click', () => {
        color = 'orange';
        hoverColor();
    });

    purpleColor.addEventListener('click', () => {
        color = 'purple';
        hoverColor();
    });

    blackColor.addEventListener('click', () => {
        color = 'black';
        hoverColor();
    });

    whiteColor.addEventListener('click', () => {
        color = 'white';
        hoverColor();
    }); 
}

function hoverRainbowColor() {
    const gridItem = document.querySelectorAll('.grid-item');
    gridItem.forEach(item => item.addEventListener('mouseover', (e) => {
        let first = randomRgbValue();
        let second = randomRgbValue();
        let third = randomRgbValue();
        changeRainbowColor(e.target, first, second, third);
    }
    ));
}

function hoverColor() {
    const gridItem = document.querySelectorAll('.grid-item');
    gridItem.forEach(item => item.addEventListener('mouseover', (e) => {
        changeColor(e.target, color);
    }
    ));
}

function createGrid(size) {
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (let i = 0; i < size ** 2; i++) { 
        const div = document.createElement('div');
        div.classList.toggle('grid-item');
        gridContainer.appendChild(div);
    }
}

function changeRainbowColor(element, a, b, c) {
    element.style.cssText = `background-color: rgb(${a}, ${b}, ${c});`;
}

//selects all current grid items, if any, and un-appends them
//so the 'grid-item' elements don't exist on the DOM
function clear() {
    const div = document.querySelectorAll('.grid-item');
    div.forEach(i => gridContainer.removeChild(i));
}

//random number generators to create a random color
function randomRgbValue() {
    return Math.floor(Math.random() * 256);
}

function changeColor(element, color) {
    element.style.cssText = `background-color: ${color}`;
}


