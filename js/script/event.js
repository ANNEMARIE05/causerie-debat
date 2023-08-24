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



let input = document.querySelector('input')
let monP = document.createElement("div")


input.addEventListener('input', function change(e) {

    let varr = (e.target.value)
    console.log(+varr);
    if(varr == "orange"){
        document.body.style.backgroundColor="orange";
    }else if(varr == "coral"){
        document.body.style.backgroundColor="coral";
    }else if(varr == "yellow"){
        document.body.style.backgroundColor="yellow";
    }else if(varr == "purple"){
        document.body.style.backgroundColor="purple";
    }else if(varr == "red"){
        document.body.style.backgroundColor="red";
    }else if(varr == 'border'){
        document.body.style.border="5px dashed blue";
    }

})

function name(params) {
    
}