/* eslint-disable no-use-before-define */
/* eslint-disable no-param-reassign */
function setColor() {
  let color;
  const colors = document.querySelectorAll('.color');
  colors.forEach((colorItem) => colorItem.addEventListener('click', (e) => {
    color = e.target.id;
    // the ID of each color is the name of that color
    hoverColor(color);
  }));
}

function hoverRainbowColor() {
  const gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach((gridItem) => gridItem.addEventListener('mouseover', (e) => {
    changeRainbowColor(e.target, randomRgbValue(), randomRgbValue(), randomRgbValue());
  }));
}

function hoverColor(color) {
  const gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach((gridItem) => gridItem.addEventListener('mouseover', (e) => {
    changeColor(e.target, color);
  }));
}

function changeRainbowColor(element, a, b, c) {
  element.style.cssText = `background-color: rgb(${a}, ${b}, ${c});`;
}

// random number generators to create a random color
function randomRgbValue() {
  return Math.floor(Math.random() * 256);
}

function changeColor(element, color) {
  element.style.cssText = `background-color: ${color}`;
}

export default function handlers() {
  const rainbowButton = document.querySelector('#rainbow-button');
  rainbowButton.addEventListener('click', hoverRainbowColor);
  setColor();
}
