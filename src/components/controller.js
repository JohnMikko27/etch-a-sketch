import { setInitialGrid, setGridSize } from "./grid.js";
import { eventHandlers } from "./color.js";

export function run() {
    const changeGridButton = document.querySelector('#button');

    setInitialGrid()
    changeGridButton.addEventListener('click', setGridSize);
    eventHandlers();
   
}