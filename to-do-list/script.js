let envoyer = document.querySelector(".envoyer")
let edite1 = document.querySelector("#edite-01")
let delete1 = document.querySelector("#delete-01")

envoyer.addEventListener("click",()=>{
    let nom = document.querySelector("#nom")
    let prenom = document.querySelector("#prenom")
    let nationalite = document.querySelector("#nationalite")
    let specialite = document.querySelector("#specialite")
    const tableau = document.querySelector(".tableau");
    let monTr = tableau.querySelectorAll("tr");
    let tailleTab = monTr.length+1
    let tr = `<tr id="${tailleTab}">
    <td data-title="N°">${tailleTab}</td>
    <td data-title="NOM">${nom.value}</td>
    <td data-title="PRENOM">${prenom.value}</td>
    <td data-title="NATIONALITE">${nationalite.value}</td>
    <td data-title="SPECIALITE">${specialite.value}</td>
    <td data-title="MODIFICATION"><i class="edite" id="edite-${tailleTab}">Edite</i> <i class="delete" id="delete-${tailleTab}">Delete</i></td>
    </tr>`
    
    tableau.innerHTML+=tr


    console.log(tailleTab);
    console.log(monTr)
    console.log(tr);
    console.log(tableau);
})