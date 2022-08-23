// select squaresContainer to put divs in
const container = document.querySelector('.squaresContainer');

function createGrid() {
    for (let i = 0; i < 256; i++) {

    // creat div and append to container
    const squareDiv = document.createElement('div');
    squareDiv.classList.add("eachSquare");

    container.appendChild(squareDiv);
    };
}

createGrid();
