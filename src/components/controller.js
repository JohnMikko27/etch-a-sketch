import { setInitialGrid, setGridSize } from './grid';
import handlers from './color';

export default function run() {
  const changeGridButton = document.querySelector('#change-grid-button');

  setInitialGrid();
  changeGridButton.addEventListener('click', setGridSize);
  handlers();
}
