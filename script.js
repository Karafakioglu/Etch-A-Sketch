const gridContainer = document.getElementById("grid-container");
const cleanBtn = document.getElementById("clear");
const rainbowBtn = document.getElementById("rainbow-btn")
// let colorRGB = "#B04C4C"  
let colorRGB = randomColorGenerator();
let numberOfGrids = 20;

function randomColorGenerator(){
    let r = Math.floor(Math.random() *256);
    let g = Math.floor(Math.random() *256);
    let b = Math.floor(Math.random() *256);
    let colorRGB = `rgb(${r},${b},${g})`;
    // console.log(colorRGB)
    return colorRGB
}

function generateGrid(numberOfGrids){
let squareSize = 700/numberOfGrids;
    for (let i = 0; i< numberOfGrids*numberOfGrids; i++){
        let div = document.createElement("div");
        div.classList = "grid-square";
        div.style.width = `${squareSize}px`;
        div.style.height = `${squareSize}px`;
        gridContainer.appendChild(div)
        
    }
}


function changeSquareColor(colorInput){
    let isMousedClicked = false;

    gridContainer.addEventListener("click", (event) =>{
        isMousedClicked = !isMousedClicked

        addEventListener("mouseover", (event) =>{
            if(isMousedClicked){
                if(event.target.className == "grid-square"){
                    event.target.style.backgroundColor = colorInput; 
                }
            }
        })
    })    
}

function getGridSize(){
    const gridSlider = document.getElementById("grid-number-slider");
    const gridSizeDisplay = document.getElementById("grid-size-display");
    gridSlider.addEventListener("input", (e) =>{
        let gridSizeValue = e.target.value
        gridSizeDisplay.innerText = `${gridSizeValue} X ${gridSizeValue}`
        gridContainer.innerText = ""; // Clears the canvas before setting a new grid size
        generateGrid(gridSizeValue);
        
    })
}

cleanBtn.addEventListener("click", function () {
    let squares = document.querySelectorAll(".grid-square");
    squares.forEach(square => {
      square.style.backgroundColor = "white"
    })
  });

// rainbowBtn.addEventListener("click, ")

// generateGrid(numberOfGrids)
changeSquareColor(colorRGB)
getGridSize();
randomColorGenerator();
console.log(colorRGB)


