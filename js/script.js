
// let person = document.querySelector("p")

// person.textContent = "monsoieur Rameaux";
// person.style.color= "purple";
// person.style.fontWeight= "bold";
// person.style.fontSize= "3rem";
// person.innerHTML= "Coder NaN, c'est pas sorcier";

// console.log(person);

const paragraph = document.createElement("p");
const parent = document.createElement("div");
paragraph.textContent="Ajout d'un texte au paragragraphe";


const liens = document.createElement("a");
liens.textContent="Liens de google";
liens.setAttribute("href", "https://google.com");
liens.setAttribute("target", "_blank");

// document.body.append(paragraph, liens);

document.body.appendChild(parent);
parent.appendChild(liens);
parent.appendChild(paragraph);



console.log(liens);
console.log(paragraph);