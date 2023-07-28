function canvasSize() {
    const chooseSize = document.getElementById('prompt');
    chooseSize.addEventListener('click', () => {
      const userInput = window.prompt('Type pad size (max. 100)', '');
      let userSize = parseInt(userInput, 10);
      if (userSize === '' || isNaN(userSize)) return;
      userSize = Math.min(userSize, 100);
      container.innerHTML = '';
      createGrid(userSize); 
    });
  }

function createGrid(userSize) {
    const container = document.getElementById('container');

    container.style.gridTemplateColumns = `repeat(${userSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${userSize}, 1fr)`;

    for (let i = 0; i < userSize; i++) {
        for (let j = 0; j < userSize; j++) {
            const grid = document.createElement('div');
            grid.classList.add('grid');
            container.appendChild(grid);
        }
    }
};

//Old, unoptimized, code:
//The forEach(item) added individual event listeners for each grid cell, which slowed things down.

// function draw() {
//     const canvas = document.querySelectorAll('.grid');

//     canvas.forEach(item => {
//         item.addEventListener('mouseover', () => {
//             item.style.backgroundColor = 'black';
//         });
//     });
// };

function draw() {
    const container = document.getElementById('container');
    
    container.addEventListener('mouseover', (event) => {
        if (event.target.classList.contains('grid')) {
            event.target.style.backgroundColor = 'black';
        }
    });
}

function resetBoard() {
    const reset = document.getElementById('reset');

    reset.addEventListener('click', () => {
        container.innerHTML = '';
        createGrid(16);
        draw();
    });
}

window.onload = () => {
    createGrid(16);
    draw();
    canvasSize();
    resetBoard();
};


// Old code:
// When i first wrote this, I just copied the above function.
// Now, I merge them so that a single function can both create the og board as well as resize it.
  
//   function resizeGrid(userSize) {
//     const container = document.getElementById('container');
//     container.innerHTML = ''; 

//     container.style.gridTemplateColumns = `repeat(${userSize}, 1fr)`;
//     container.style.gridTemplateRows = `repeat(${userSize}, 1fr)`;
  
//     for (let i = 0; i < userSize; i++) {
//       for (let j = 0; j < userSize; j++) {
//         const grid = document.createElement('div');
//         grid.classList.add('grid');
//         container.appendChild(grid);
//         draw();
//       }
//     }
//   }
