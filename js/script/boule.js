let card = document.querySelector(".card")
let card1 = document.querySelector(".card1")
let card2 = document.querySelector(".card2")
let card3 = document.querySelector(".card3")
let card4 = document.querySelector(".card4")

card1.addEventListener('click', function cl() {
    card.style.borderLeft="10px solid blue";
    card3.style.visibility="visible"
})
card3.addEventListener('click', function cl() {
    card.style.borderBottom="10px solid red";
    card4.style.visibility="visible"
})
card4.addEventListener('click', function cl() {
    card.style.borderRight="10px solid purple";
    card2.style.visibility="visible"
})
card2.addEventListener('click', function cl() {
    card.style.borderTop="10px solid yellow";
})