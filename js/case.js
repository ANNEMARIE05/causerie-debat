// let bouton = document.querySelector(".btn");
// let premierinput = document.querySelector(".input1");
// let deuxieminput = document.querySelector(".input2");
let form = document.querySelector(".formulaire");

let minute = 0;
let square = 0;
let infos = [];

function genInfos(number) {
  for (let i = 1; i <= number; i++) {
    infos.push({number:i, color:genColor()})
  }
}
function genColor() {
  let color = ["red", "blue", "yellow", "purple", "green", "lime", "grey", "skyblue", "orange", "pink"];
  let index = Math.floor(Math.random()* color.length);
  return color[index];
}
function getDivider(nombre) {
  let divide = [];
  let output = [];

  for (let i = 2; i <= nombre -1; i++) {
    if (nombre % i === 0) {
      let m1 = i;
      let m2 = nombre/i;
      if (!divide.includes(m1) && !divide.includes(m2)) {
        divide.push(m1,m2);
        let diff = m1 > m2 ? m1 - m2: m2-m1;
        output.push({m1, m2, diff})
      }
    }  
  }
  output.sort((a,c)=> (a.diff) - (c.diff))
  console.log(output);
}

form.addEventListener("submit",(e)=>{
  e.preventDefault()

  let error = "";
  let recupInput1 = parseInt(e.target.children[1].children[0].value);
  let recupInput2 = parseInt(e.target.children[1].children[1].value);
  console.log(recupInput1,recupInput2);

  if (recupInput1 < 4 &&  recupInput1 > 200) {
    error = "le nombre de case doit être compris entre 4 et 200";
  }
  else if(recupInput1 % 2 !== 0){
    error = "Veiller entrer un multiple de 2";
  }
  else if(recupInput2 < 1 &&  recupInput2 > 5){
    error = "Veiller entrer un nombre compris entre 1 et 5";
  }
  if(error){
    let buttn = e.target.children[2];
    buttn.textContent = error;
    buttn.style.backgroundColor = "red";
    buttn.disabled = true;
    setTimeout(()=>{
      buttn.disabled = false;
      buttn.textContent = "submit";
      buttn.style.backgroundColor = "blue";
    },3000)
  }else{
      square = recupInput1;
      minute = recupInput2;
      genInfos(square/2);
      console.log(infos);
  }

})

getDivider(12);