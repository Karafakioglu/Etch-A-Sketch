const gridContainer = document.getElementById("grid-container");
const cleanBtn = document.getElementById("clear");
const rainbowBtn = document.getElementById("rainbow-btn");
const colorPicker = document.getElementById("color-picker")

function init(){
    window.onload = (event) =>{
        changeSquareColor("black")
    }
}

function randomColorGenerator(){
    let r = Math.floor(Math.random() *256);
    let g = Math.floor(Math.random() *256);
    let b = Math.floor(Math.random() *256);
    let colorRGB = `rgb(${r},${b},${g})`;
    return colorRGB;
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


function changeSquareColor(colorInput){
        gridContainer.addEventListener("mouseover", (event) =>{
                if(event.target.className == "grid-square"){
                    event.target.style.backgroundColor = colorInput; 
                }
        })
}


function decisionMaking(){

    colorPicker.addEventListener("input", (event) =>{
        changeSquareColor(event.target.value);
    })

    rainbowBtn.addEventListener("click", function(){
        gridContainer.addEventListener("mouseover", (event) =>{
            let randomColor = randomColorGenerator();
            if(event.target.className == "grid-square"){
                event.target.style.backgroundColor = randomColor; 
            }
        })
    })

}

function clearCanvas(){
    cleanBtn.addEventListener("click", function () {
        let squares = document.querySelectorAll(".grid-square");
        squares.forEach(square => {
            square.style.backgroundColor = "white"
        })
    });
}




getGridSize();
randomColorGenerator();
clearCanvas();
decisionMaking();


//add random note