// function match(chaine, param) {
//     let voyelles = "aeouiy"
//     const TousNosVariables = [];
//     if(chaine.length < param.length){
//         return -1
//     }else{
//         let table = chaine.split("")
//         table = table.map((elemnt , index) =>{
//             let isVoyelle = voyelles.includes(elemnt.toLowerCase())
//             return /a-z/.test(elemnt.toLowerCase()) ? (isVoyelle?"O":"x") : "";

//         }).join("")
//         console.log(table);
//         console.log(table == param?true: false);

//         let count = 0;
//         for (let i = 0; i < table.length; i++) {
//             if(table[i]!==table[count]){
//                 return false
//             }else{
//                 count++
//                 if (count===param.length-1) {
//                     count = 0

//                 }else{
//                     count ++
//                 }
//             }
           
//         }
//         return true
//     }
// }
// console.log(match("cous ","XOO"));


class Tableau {
    constructor(...props){
        console.log(props);
        this.tableau = [...props]
    }
    /**
     * 
     * @param {number} indice
     */
    at(indice){
        console.log(this.tableau);
    }

}
tab= new Tableau (1,2,3,4)


