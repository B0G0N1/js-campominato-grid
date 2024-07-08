const playButton = document.getElementById('play-button');
const grid = document.getElementById('grid');
const difficulty = document.getElementById('game-difficulty').value;

playButton.addEventListener('click', function() {
    grid.innerHTML = '';
    createSquare();
    selectDifficulty();
});

function createSquare() {
    for(let i = 1; i <= 100; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.innerText = [i];
        grid.appendChild(square);
    }
}

function selectDifficulty() {
    switch(difficulty) {
        case 1:
            alert("Difficolatà 1");
            break;
        case 2:
            alert("Difficolatà 2");
            break;
        case 3:
            alert("Difficolatà 3");
            break;
    }
}