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

function canvasSize() {
    const chooseSize = document.getElementById('prompt');
    chooseSize.addEventListener('click', () => {
        const userInput = window.prompt('Type pad size (max. 100)', '');
        let userSize = parseInt(userInput, 10);
        
        if (userSize === '' || isNaN(userSize)) {
        alert('Type a number (max. 100)')
        }
        else if (userSize < 0 || userSize > 100) {
        alert('Type a number between 1 and 100')
        }
        else {
        container.innerHTML = '';
        createGrid(userSize);
        talkbox.innerHTML = '';
        setTimeout(displayComment, 5000);
        } 
    });
}

const colorBlack = '#000000';
const container = document.getElementById('container');

function draw() {
    container.addEventListener('pointerover', (event) => {
        event.target.style.backgroundColor = colorBlack;
    });
};

function getRandomRgb() {
    let num = Math.round(0xffffff * Math.random());
    let r = num >> 16;
    let g = num >> 8 & 255;
    let b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

const colorVomit = document.getElementById('color');
colorVomit.addEventListener('click', () => {
container.addEventListener('pointerover', (event) => {
    event.target.style.backgroundColor = getRandomRgb();
  });
});

const black = document.getElementById('black');
black.addEventListener('click', () => {
    container.addEventListener('pointerover', (event) => {
        event.target.style.backgroundColor = colorBlack;
    });
});

function resetBoard() {
    const reset = document.getElementById('reset');

    reset.addEventListener('click', () => {
        container.innerHTML = '';
        createGrid(32);
        draw();
        talkbox.innerHTML = '';
        setTimeout(displayComment, 5000);
    });
}

window.onload = () => {
    createGrid(32);
    draw();
    canvasSize();
    resetBoard();
};

let comments = [
    'Wow. Never seen that before.',
    'You\'re a regular Picasso.',
    'How very original.',
    'Well. That is certainly...something.',
    'Now this is fridge door worthy.',
    'I know I\'m just a piece of code but... I forgot where I was going with this.',
    'If Michelangelo could see this, he would probably cry.',
    'What is this even supposed to be?',
    'Comment library depleted. Reloading comment library...',
    'I don\'t know what I\'m seeing, I\'m just a stupid piece of code.',
    'Kinda reminds me of someone I know.',
    'Yes. That is ... Wow.',
    'No. Just no.',
    'What a horrible day to have eyes.',
    'That is the most beautiful thing I have ever seen.',
    'Somebody get the Louvre on the phone.',
    'What am I even looking at here?'
]

function displayComment() {
  let index = Math.floor(Math.random() * comments.length);
  let comment = comments[index];
  let element = document.getElementById('talkbox');
  element.innerHTML = comment;
  element.style.fontSize = '4ch';
}

setTimeout(displayComment, 5000);