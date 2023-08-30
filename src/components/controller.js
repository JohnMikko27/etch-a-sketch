/* eslint-disable import/extensions */
import { setInitialGrid, setGridSize } from './grid.js';
import handlers from './color.js';

export default function run() {
  const changeGridButton = document.querySelector('#change-grid-button');

  setInitialGrid();
  changeGridButton.addEventListener('click', setGridSize);
  handlers();
}
