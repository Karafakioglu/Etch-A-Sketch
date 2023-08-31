const gridContainer = document.getElementById("grid-container")

for (let i = 0; i< 272; i++){
    let div = document.createElement("div");
    div.classList = "grid-square"
    gridContainer.appendChild(div)
}

addEventListener("mouseover", (event) =>{
    event.target.style.backgroundColor = "red"
    console.log(event.target)

    // addEventListener("mouseover", (event) =>{
    //     event.target.style.backgroundColor = "red";
    // })

})

