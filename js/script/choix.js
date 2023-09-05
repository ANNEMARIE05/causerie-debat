let curentBottom = null;
let inp1 = document.querySelector(".inp1");
let inp2 = document.querySelector(".inp2");
let carreaux = document.querySelector(".carreaux");


function setBottom(event) {
    let cards = document.querySelector(".cards.active");
    console.log(cards);
    if(cards){
        cards.classList.remove("active");
    }
    event.target.classList.add("active");
    inp1.value = event.target.getAttribute("backgroundColor") || ""
    curentBottom = event.target;
}



inp1.addEventListener("input",(e) => {
    curentBottom.style.backgroundColor=e.target.value;
    curentBottom.setAttribute("backgroundcolor", e.target.value)
} )
inp2.addEventListener("input",(e) => {
    
} )