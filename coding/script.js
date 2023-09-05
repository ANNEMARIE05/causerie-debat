// function premier(a) {
//     for (let i = 2; i < a; i++) {
//         if(a%i==0){
//             return "false"
//         }
//     }
//     return "true"
// }
// console.log(premier(9));


// function length(a) {
//     let count = 0;
//     let nb = 0;
//     while(a[count]){
//         count++;
//         nb++
//     }
//     return nb++
// }
// console.log(length("marie"));


// function estMultipleDe(nb1,nb2) {
//     return (nb1%nb2 === 0)
// }
// console.log(estMultipleDe(3,3));


// function estTruthy(nb) {
//     return Boolean(nb)
// }


function nEvendOld(nbre, type) {
    if((typeof(nbre)==="number" && typeof(type)==="string") && (type==="impair" || type==="pair")){
        let nbrPair = [];
        let nbrImpair = [];
        for (let i = 0; i <= nbre**nbre; i++) {
            if(i%2===0){
                nbrPair.push(i)
                console.log(nbrPair);
            }else{
                nbrImpair.push(i)
            }  
        }
        if(type === "impair"){
            return nbrImpair[nbre-1]
        }else{
            return nbrPair[nbre-1]
        }
    }else{
        return -1
    }
}
console.log(nEvendOld(5, "impair"));