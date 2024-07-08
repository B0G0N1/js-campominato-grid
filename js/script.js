const playButton = document.getElementById('play-button');

const grid = document.getElementById('grid');

playButton.addEventListener('click', function() {
    createSquare();
});


function createSquare() {
    for(let i = 1; i <= 100; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        grid.innerText("Ciao");
        grid.appendChild(square);
    }
}