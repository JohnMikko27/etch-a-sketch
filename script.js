const body = document.querySelector('body');
const button = document.querySelector('#button');

const gridContainer = document.createElement('div');
gridContainer.classList.add('grid-container');

const rightContainer = document.querySelector('.right-container');
rightContainer.appendChild(gridContainer);    

const rainbowButton = document.querySelector('#rainbow-button');
const redColor = document.querySelector('.red');

//will be set when button event listeners are clicked
let color;

button.addEventListener('click', setGrid);
initialGrid();
//Creates initial grid
function initialGrid() {
    clear();
    createGrid(16);
    rainbowButton.addEventListener('click', hoverRainbowColor);
    redColor.addEventListener('click', (e) => {
        color = 'red';
        hoverColor();
    })
}

function setGrid() {
    clear();
    let n = prompt("How many squares do you want per side?");
    createGrid(n);
    rainbowButton.addEventListener('click', hoverRainbowColor);
    redColor.addEventListener('click', (e) => {
        color = 'red';
        hoverColor();
    })  
    
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


