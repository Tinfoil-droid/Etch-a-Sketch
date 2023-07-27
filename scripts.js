

function createGrid() {
    const container = document.getElementById('container');

    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            const grid = document.createElement('div');
            grid.classList.add('grid');
            container.appendChild(grid);
        }
    }
};

function draw() {
    const canvas = document.querySelectorAll('.grid');

    canvas.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = 'black';
        });
    });
};

window.onload = () => {
    createGrid();
    draw();
};