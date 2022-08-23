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

const highlighted = document.querySelector('div');
highlighted.addEventListener("mouseover", function(e) {
  e.target.classList.replace("eachSquare", "highlighted");
});


const button = document.querySelector('button')
button.addEventListener('click', () => {
let newGridCount = prompt("Choose New Grid Square Count");
});    


createGrid();
