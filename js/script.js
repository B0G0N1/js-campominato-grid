const playButton = document.getElementById('play-button');
const grid = document.getElementById('grid');
let squareNumber;
let squareDimension;

playButton.addEventListener('click', function() {
    grid.innerHTML = '';
    selectDifficulty();
    createSquare();
});

function createSquare() {
    for(let i = 1; i <= squareNumber; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.innerText = i;
        square.style.width = squareDimension;
        square.style.height = squareDimension;
        grid.appendChild(square);
    }
}

function selectDifficulty() {
    const difficulty = document.getElementById('game-difficulty').value;
    switch(parseInt(difficulty)) {
        case 1:
            alert("Difficoltà 1");
            squareNumber = 100;
            squareDimension = calc(1200 / 10);
            break;
        case 2:
            alert("Difficoltà 2");
            squareNumber = 81;
            squareDimension = calc(1200 / 8);
            break;
        case 3:
            alert("Difficoltà 3");
            squareNumber = 49;
            squareDimension = calc(1200 / 7);
            break;
        default:
            alert("Seleziona una difficoltà valida");
            return false;
    }
    return true;
}