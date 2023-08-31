const gridContainer = document.getElementById("grid-container")

for (let i = 0; i< 272; i++){
    let div = document.createElement("div");
    div.classList = "grid-square"
    gridContainer.appendChild(div)
}



