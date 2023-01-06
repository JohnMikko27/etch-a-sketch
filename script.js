const body = document.querySelector('body');
const button = document.querySelector('#button');

const gridContainer = document.createElement('div');
gridContainer.classList.add('grid-container');

const rightContainer = document.querySelector('.right-container');
rightContainer.appendChild(gridContainer);    

const blueButton = document.querySelector('.blue');
const redButton = document.querySelector('.red');
const greenButton = document.querySelector('.green');

//will be set when button event listeners are clicked
let color;



button.addEventListener('click', setGrid);

blueButton.addEventListener('click', () => color = 'blue');
redButton.addEventListener('click', () => color = 'red');
greenButton.addEventListener('click', () => color = 'green');

function setGrid() {
    clear();
    let n = prompt("How many squares do you want per side?");
    createGrid(n);
    //comment
    const gridItem = document.querySelectorAll('.grid-item');
    gridItem.forEach(item => item.addEventListener('mouseover', (e) => {
        let first = firstRgbValue();
        let second = secondRgbValue();
        let third = thirdRgbValue();
        changeColor(e.target, first, second, third);
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

function changeColor(element, a, b, c) {
    element.style.cssText = `background-color: rgb(${a}, ${b}, ${c});`;
}


function clear() {
    const div = document.querySelectorAll('.grid-item');
    div.forEach(i => gridContainer.removeChild(i));
}

//random number generators to create a random color
function firstRgbValue() {
    return Math.floor(Math.random() * 256);
}

function secondRgbValue() {
    return Math.floor(Math.random() * 256);
}

function thirdRgbValue() {
    return Math.floor(Math.random() * 256);
}
//get random numbers from 0 to 255 and set that as color
//have 3 functions that each return a number from 0 to 255
//and set them equal to variables which will hold that value which we will use in rgb



/*
Create buttons which change the color of hover effect
create global variable 'color' which gets set with a button event listener
Then just pass that global variable 'color' into the changeColor function;




*/