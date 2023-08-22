const paragraph = document.createElement("p");
paragraph.textContent="Ajout d'un texte au paragragraphe";

const liens = document.createElement("a");
liens.textContent="Liens de google";
liens.setAttribute("href", "https://google.com");
liens.setAttribute("target", "_blank");

document.body.append(paragraph,liens);

paragraph.addEventListener("click", function(){
    alert("bonjour")
    liens.style.color="orangered";
    liens.style.textDecoration="none"
})