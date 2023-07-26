const container = document.querySelector('#container');
// container.style.cssText = 'margin: 100px; display: flex; flex-wrap: wrap; ';


function createGrid() {
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            const grid = document.createElement('div');
            grid.classList.add('grid');
            container.appendChild(grid);
        }
    }
};

window.onload = () => {
    createGrid()
};
