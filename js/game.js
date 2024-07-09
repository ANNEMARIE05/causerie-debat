
// function test() {
//     a=2
//    console.log("a", a); 
// }


// console.log(test(), a);
// if(a){
//     console.log("je suis", a);
// }
// var a = 2;
// let b = 3



// function premier(a) {
//     let table = []
//     for (let i = 2; i < a; i++) {
//         if(a%i===0){
//             table.push(i)
//             return table.length>0?table:true
//         }
//         return true
//     }
// }
// console.log(premier());

// function parcourAphabet(chaine){

//     if(typeof(chaine)==="string"){
//         const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y" ,"z"]
//         let lettre = "";

//         for (let i = 0; i < chaine.length; i++) {
//             let index = alphabet.indexOf(chaine[i])+1
//             let isFirst = premier(index)
//             if(isFirst === true){
//                 return lettre+=chaine[i]
//             }
//             return lettre
           
//         }
     
//     }else{
//         return -1
//     }
// }
// console.log(parcourAphabet("abidjan"));




// function alphabet(nb) {
//     const lettre = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y" ,"z"]
//     if(nb%3===0 || nb%5===0){
//         if(nb%3===0){
//             return lettre[nb-1]
//         }else{
//             return lettre[nb-1]
//         }
//     }else{
//         return "element inexistant"
//     }
// }
// console.log(alphabet(2));
// console.log(alphabet(5));
// console.log(alphabet(20));
// console.log(alphabet(25));



function encadrer(phrase) {
    if(typeof(phrase)==="string"){
        const voyelles = "aeiouy"        
        const consonnes = "bcdfghjklmnpqrstvwxz"
        let ouput = []
        for (let i = 1; i < phrase.length-1; i++) {
        let isConsonne = consonnes.includes(phrase[i].toLocaleLowerCase())
        let isPrevVoyelle = voyelles.includes(phrase[i-1].toLocaleLowerCase())
        let isNextVoyelle = voyelles.includes(phrase[i+1].toLocaleLowerCase())
            if(isConsonne && isPrevVoyelle && isNextVoyelle){
                ouput.push(phrase[i-1]+phrase[i]+phrase[i+1])
            }
        }
        return ouput
    }
    return -1
}
console.log(encadrer('banana, barbapapa'))


function countWords(chaine, num) {
    let tab = [];
    let collectWord = "";
    for (let i = 0; i < chaine.length; i++) {
        if(chaine[i]!= " "){
            collectWord += chaine[i];
        }else{
            if(collectWord.length === num){
                tab.push([collectWord]);
            }
            collectWord=""
        }
        if(collectWord.length === num){
            tab.push([collectWord]);
        }
    }
    return tab
}
console.log(countWords("salut la",2));