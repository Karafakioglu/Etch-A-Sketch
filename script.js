const gridContainer = document.getElementById("grid-container")

for (let i = 0; i< 272; i++){
    let div = document.createElement("div");
    div.classList = "grid-square"
    gridContainer.appendChild(div)
}

function colorGridOnHover(){
    let isMousedClicked = false;

    gridContainer.addEventListener("click", (event) =>{
        isMousedClicked = !isMousedClicked


        addEventListener("mouseover", (event) =>{
            if(isMousedClicked){
                if(event.target.className == "grid-square"){
                    event.target.style.backgroundColor = "red"    
                }
            }

        })

    })    
}

colorGridOnHover()
