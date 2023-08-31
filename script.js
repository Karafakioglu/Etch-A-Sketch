const gridContainer = document.getElementById("grid-container");
const cleanBtn = document.getElementById("clear");
let colorRGB = "#B04C4C"  
let numberOfGrids = 20;

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

function getSettings(){
let squares = document.querySelectorAll(".grid-square")
    cleanBtn.addEventListener("click", function(){
        squares.forEach(square =>{
            square.style.backgroundColor = "white"
        })
    })
}

generateGrid(numberOfGrids)
changeSquareColor(colorRGB)
getSettings();