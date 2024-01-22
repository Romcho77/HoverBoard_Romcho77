let container = document.querySelector(".container")
let body = document.querySelector("body")
let div
let color = ["red", "green", "blue", "yellow",
 "orange", "purple", "cyan", "pink", "brown", "teal",
 "maroon", "olive", "navy", "violet", "indigo", "azure", "beige"];

for(let i = 0; i < 30; i++){ // < 30

    for (let index = 0; index < 30; index++) { // <25
        div = document.createElement("div")
        div.style.backgroundColor = "gray"
        div.style.width = "17px"  //17px
        div.style.height = "17px" // 17px
        container.appendChild(div)
        
    }

}
let lastElement = container.lastElementChild
container.removeChild(lastElement)

document.querySelectorAll("div").forEach(element => {
    element.addEventListener('mouseover',()=>{
        element.style.backgroundColor = color[Math.floor(Math.random()*color.length)]
        element.style.opacity = "0.8"
        element.style.transition = "0s"
        // element.style.transition = "0.5s"
        
    })
    element.addEventListener('mouseout', ()=>{
        element.style.backgroundColor = "gray"
        element.style.opacity = "0.1"
        element.style.transition = "1.5s"
        
    })
    
    
});

// container.addEventListener("mouseover", ()=>{
//     container.style.backgroundColor = "azure"
//     container.style.opacity = "0.4"
// })
// container.addEventListener("mouseout", ()=>{
//     container.style.backgroundColor = "rgba(128, 128, 128, 0.212);"
//     container.style.opacity = "0.1"
// })



