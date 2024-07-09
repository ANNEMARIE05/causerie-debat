// function tableDeMultiplication(nombre) {
//   for (let i = 0; i <= n; i++) {
//     console.log(`${nombre} x ${i} = ${nombre*i}`);
//   }
// }
// console.log(tableDeMultiplication(1));



// function somme(nombre) {
//     let result = 0;
//     for (let i = nombre; i <= 1000; i++) {
//         result = result+i
//         return result
//     }
// }
// somme()
// console.log(somme(1));




// function generate() {
//     return Math.floor(Math.random()*100)
// }
// generate()

// function GenerateNumber() {
//     const generee = generate
//     let nbrTentative = 5;
//     let napasTrouver = true;
//     do{
//         let entree = parseInt(prompt("ENTREZ UN NOMBRE"))

//         if(entree===generee){
//             alert(`Mes félicitations vous avez la bonne reponse`)
//             napasTrouver= false;
//         }else
//         if( entree > generee){
//             alert("c'est moin")
//         }else
//         if(entree < generee){
//             alert("c'est plus")
//         }else{
//             alert("Vous avez trouver le nombre exact")
//         }

//         if(nbrTentative ===0){
//             alert('napastrouver')
//         }

//     }while(napasTrouver)
// }
// console.log(GenerateNumber());



function estPangramme(phrase) {
  phrase = phrase.toLowerCase();
  let lettresUniques = new Set();

  for (let i = 0; i < phrase.length; i++) {
    let caractere = phrase[i];
    if (caractere >= 'a' && caractere <= 'z') {
      lettresUniques.add(caractere);
    }
  }
  return lettresUniques.size === 26;
}