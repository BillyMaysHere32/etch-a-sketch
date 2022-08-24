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
console.log(newGridCount); 


function newGrid() {
    container.innerHTML = "";
    let newGridCountSquared = newGridCount * newGridCount;
    console.log(newGridCountSquared); 
    if (newGridCount <= 100) {
        for (let i = 0; i < newGridCountSquared; i++) {
            // creat div and append to container
            const squareDiv = document.createElement('div');
            squareDiv.classList.add("eachSquare");
            container.appendChild(squareDiv);
            };
        
            container.style.setProperty("grid-template-columns",
            `repeat(${newGridCount}, 2fr)`);
            console.log(newGridCount);


            container.style.setProperty("grid-template-rows",
            `repeat(${newGridCount}, 2fr)`);
        } else {
            return alert("Error, please enter a number from 1-100");
        }
}
newGrid();
});   




createGrid();
