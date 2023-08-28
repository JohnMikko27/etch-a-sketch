/*
are these good modules???
call the different grid and color functions in controller.js 
and then have a function in script.js that allows everything to run when the DOM is loaded
*/

export function eventHandlers() {
    const rainbowButton = document.querySelector('#rainbow-button')
    rainbowButton.addEventListener('click', hoverRainbowColor);

    // redColor.addEventListener('click', () => {
        
    //     color = 'red';
    //     hoverColor();
    // });

    // blueColor.addEventListener('click', () => {
    //     color = 'blue';
    //     hoverColor();
    // });

    // greenColor.addEventListener('click', () => {
    //     color = 'green';
    //     hoverColor();
    // });

    // yellowColor.addEventListener('click', () => {
    //     color = 'yellow';
    //     hoverColor();
    // });

    // orangecolor.addEventListener('click', () => {
    //     color = 'orange';
    //     hoverColor();
    // });

    // purpleColor.addEventListener('click', () => {
    //     color = 'purple';
    //     hoverColor();
    // });

    // blackColor.addEventListener('click', () => {
    //     color = 'black';
    //     hoverColor();
    // });

    // whiteColor.addEventListener('click', () => {
    //     color = 'white';
    //     hoverColor();
    // }); 

    setColor();
}

// function mouseDown() {
//     const gridContainer = document.querySelector('gridContainer');
//     let isMouseDown = false;

//     gridContainer.addEventListener('mousedown', (e) => {
//         isMouseDown = true;
//         return isMouseDown;
//     })
//     return 
// }

function setColor() {
    let color;
    const colors = document.querySelectorAll('.color');
    colors.forEach(colorItem => colorItem.addEventListener('click', (e) => {
        color = e.target.style.backgroundColor;
    }));
    hoverColor(color);
}

function hoverRainbowColor() {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(gridItem => gridItem.addEventListener('mouseover', (e) => {
        changeRainbowColor(e.target, randomRgbValue(), randomRgbValue(), randomRgbValue());
    }));
}

function hoverColor(color) {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(gridItem => gridItem.addEventListener('mouseover', (e) => {
        changeColor(e.target, color);
    }));
}

function changeRainbowColor(element, a, b, c) {
    element.style.cssText = `background-color: rgb(${a}, ${b}, ${c});`;
}

//random number generators to create a random color
function randomRgbValue() {
    return Math.floor(Math.random() * 256);
}

function changeColor(element, color) {
    element.style.cssText = `background-color: ${color}`;
}