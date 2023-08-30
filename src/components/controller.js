import { setInitialGrid, setGridSize } from "./grid.js";
import { handlers } from "./color.js";

export function run() {
    const changeGridButton = document.querySelector('#change-grid-button');

    setInitialGrid()
    changeGridButton.addEventListener('click', setGridSize);
    handlers();
}