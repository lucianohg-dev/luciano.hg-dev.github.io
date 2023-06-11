//Inicio Nome1 e Contato1//





let agendador1 = document.getElementById("agendador1");

agendador1.addEventListener("submit", (e) =>{
  
e.preventDefault();

    let Nome1 = document.getElementById("Nome1").value;
    let Contato1 = document.getElementById("Contato1").value;
    localStorage.setItem("Nome1", JSON.stringify(Nome1));
    localStorage.setItem("Contato1", JSON.stringify(Contato1));
    alert("Você está Agendado (a)! Obrigado!");
});


function Editar1() {
  Nome1.value = "";
  Contato1.value = "";
  localStorage.removeItem("Nome1");
  localStorage.removeItem("Contato1");
}
//Mostrar na tela//
function tela1(){

if(localStorage.hasOwnProperty("Nome1")&&localStorage.hasOwnProperty("Contato1")){

Nome1.value = JSON.parse(localStorage.getItem("Nome1"))
Contato1.value =JSON.parse(localStorage.getItem("Contato1"))
document.getElementById("Nome1").blur();
document.getElementById("Nome1").style.textAlign="center";
document.getElementById("Contato1").blur();
document.getElementById("Contato1").style.backgroundColor="black"
document.getElementById("Contato1").style.height="4px"
document.getElementById("Contato1").style.marginTop="10px"
document.getElementById("Contato1").style.textAlign="center";
document.getElementById("enviador1").style.backgroundColor="#ff5248"
document.getElementById("enviador1").value = "Agendado"
document.getElementById("enviador1").disabled = true;
document.getElementById("enviador1").style.cursor = "none";
document.getElementById("Editar2").disabled=true;
}else{

  document.getElementById("enviador1").style.backgroundColor="rgb(135, 235, 105)"
  document.getElementById("enviador1").value = "Agendar"
  document.getElementById("Nome1").blur;
  document.getElementById("Contato1").blur;
  document.getElementById("Contato1").style.backgroundColor=""
  document.getElementById("Contato1").style.height=""
  document.getElementById("Contato1").style.marginTop=""
  document.getElementById("enviador1").disabled = false;
  document.getElementById("enviador1").style.cursor = "";
}
}setInterval(tela1,10)


//final Nome1 e Contato1//




//Nome2 e Contato2//

let agendador2= document.getElementById("agendador2");

agendador2.addEventListener("submit", (e) => {
  e.preventDefault();
  let Nome2 = document.getElementById("Nome2").value;
  let Contato2 = document.getElementById("Contato2").value;
  localStorage.setItem("Nome2", JSON.stringify(Nome2));
  localStorage.setItem("Contato2", JSON.stringify(Contato2));

});

function Editar2() {
  Nome2.value = "";
  Contato2.value = "";
  localStorage.removeItem("Nome2");
  localStorage.removeItem("Contato2");
}

function tela2(){

if(localStorage.hasOwnProperty("Nome2")&&localStorage.hasOwnProperty("Contato2")){

Nome2.value = JSON.parse(localStorage.getItem("Nome2"))
Contato2.value =JSON.parse(localStorage.getItem("Contato2"))
document.getElementById("Nome2").blur();
document.getElementById("Nome2").style.textAlign="center";
document.getElementById("Contato2").blur();
document.getElementById("Contato2").style.backgroundColor="black"
document.getElementById("Contato2").style.height="4px"
document.getElementById("Contato2").style.marginTop="10px"
document.getElementById("Contato2").style.textAlign="center";
document.getElementById("enviador2").style.backgroundColor="#ff5248"
document.getElementById("enviador2").value = "Agendado"
document.getElementById("enviador2").disabled = true;
document.getElementById("enviador2").style.cursor ="none";
}else{
  document.getElementById("enviador2").style.backgroundColor="rgb(135, 235, 105)"
  document.getElementById("enviador2").value = "Agendar"
  document.getElementById("Nome2").blur;
document.getElementById("Contato2").blur;
document.getElementById("enviador2").disabled = false;
document.getElementById("Contato2").style.backgroundColor=""
document.getElementById("Contato2").style.height=""
document.getElementById("Contato2").style.marginTop=""


}
}setInterval(tela2,10)





//Nome3 e Contato3//

let agendador3= document.getElementById("agendador3");

agendador3.addEventListener("submit", (e) => {
  e.preventDefault();
  let Nome3 = document.getElementById("Nome3").value;
  let Contato3 = document.getElementById("Contato3").value;
  localStorage.setItem("Nome3", JSON.stringify(Nome3));
  localStorage.setItem("Contato3", JSON.stringify(Contato3));
  alert("Você está Agendado (a)! Obrigado!");
});

function Editar3() {
  Nome3.value = "";
  Contato3.value = "";
  localStorage.removeItem("Nome3");
  localStorage.removeItem("Contato3");
}

function tela3(){

if(localStorage.hasOwnProperty("Nome3")&&localStorage.hasOwnProperty("Contato3")){

Nome3.value = JSON.parse(localStorage.getItem("Nome3"))
Contato3.value =JSON.parse(localStorage.getItem("Contato3"))
document.getElementById("Nome3").blur();
document.getElementById("Contato3").blur();
document.getElementById("Contato3").style.backgroundColor="black"
document.getElementById("Contato3").style.height="4px"
document.getElementById("Contato3").style.marginTop="10px"
document.getElementById("enviador3").style.backgroundColor="#ff5248"
document.getElementById("enviador3").value = "Agendado"
document.getElementById("enviador3").disabled = true;
document.getElementById("enviador3").style.cursor ="none";
}else{
  document.getElementById("enviador3").style.backgroundColor="rgb(135, 235, 105)"
  document.getElementById("enviador3").value = "Agendar"
  document.getElementById("Nome3").blur;
document.getElementById("Contato3").blur;
document.getElementById("Contato3").style.backgroundColor=""
document.getElementById("Contato3").style.height=""
document.getElementById("Contato3").style.marginTop=""
document.getElementById("enviador3").style.disabled = false;


}
}setInterval(tela3,10)





//Nome4 e Contato4//

let agendador4= document.getElementById("agendador4");

agendador4.addEventListener("submit", (e) => {
  e.preventDefault();
  let Nome4 = document.getElementById("Nome4").value;
  let Contato4 = document.getElementById("Contato4").value;
  localStorage.setItem("Nome4", JSON.stringify(Nome4));
  localStorage.setItem("Contato4", JSON.stringify(Contato4));
  alert("Você está Agendado (a)! Obrigado!");
});

function Editar4() {
  Nome4.value = "";
  Contato4.value = "";
  localStorage.removeItem("Nome4");
  localStorage.removeItem("Contato4");
}

function tela4(){

if(localStorage.hasOwnProperty("Nome4")&&localStorage.hasOwnProperty("Contato4")){

Nome4.value = JSON.parse(localStorage.getItem("Nome4"))
Contato4.value =JSON.parse(localStorage.getItem("Contato4"))
document.getElementById("Nome4").blur();
document.getElementById("Contato4").blur();
document.getElementById("Contato4").style.backgroundColor="black"
document.getElementById("Contato4").style.height="4px"
document.getElementById("Contato4").style.marginTop="10px"
document.getElementById("enviador4").style.backgroundColor="#ff5248"
document.getElementById("enviador4").value = "Agendado"
document.getElementById("enviador4").disabled = true;
document.getElementById("enviador4").style.cursor ="none";
}else{
  document.getElementById("enviador4").style.backgroundColor="rgb(135, 235, 105)"
  document.getElementById("enviador4").value = "Agendar"
  document.getElementById("Nome4").blur;
  document.getElementById("Contato4").blur;
  document.getElementById("Contato4").style.backgroundColor=""
document.getElementById("Contato4").style.height=""
document.getElementById("Contato4").style.marginTop=""
  document.getElementById("enviador4").style.disabled = false;


}
}setInterval(tela4,10)



//Nome5 e Contato5//

let agendador5= document.getElementById("agendador5");

agendador5.addEventListener("submit", (e) => {
  e.preventDefault();
  let Nome5 = document.getElementById("Nome5").value;
  let Contato5 = document.getElementById("Contato5").value;
  localStorage.setItem("Nome5", JSON.stringify(Nome5));
  localStorage.setItem("Contato5", JSON.stringify(Contato5));
  alert("Você está Agendado (a)! Obrigado!");
});

function Editar5() {
  Nome5.value = "";
  Contato5.value = "";
  localStorage.removeItem("Nome5");
  localStorage.removeItem("Contato5");
}

function tela5(){

if(localStorage.hasOwnProperty("Nome5")&&localStorage.hasOwnProperty("Contato5")){

Nome5.value = JSON.parse(localStorage.getItem("Nome5"))
Contato5.value =JSON.parse(localStorage.getItem("Contato5"))
document.getElementById("Nome5").blur();
document.getElementById("Contato5").blur();
document.getElementById("Contato5").style.backgroundColor="black"
document.getElementById("Contato5").style.height="4px"
document.getElementById("Contato5").style.marginTop="10px"
document.getElementById("enviador5").style.backgroundColor="#ff5248"
document.getElementById("enviador5").value = "Agendado"
document.getElementById("enviador5").disabled = true;
document.getElementById("enviador5").style.cursor ="none";
}else{
  document.getElementById("enviador5").style.backgroundColor="rgb(135, 235, 105)"
  document.getElementById("enviador5").value = "Agendar"
  document.getElementById("Nome5").blur;
  document.getElementById("Contato5").blur;
  document.getElementById("Contato5").style.backgroundColor=""
document.getElementById("Contato5").style.height=""
document.getElementById("Contato5").style.marginTop=""
  document.getElementById("enviador5").style.disabled = false;


}
}setInterval(tela5,10)





//Nome6 e Contato6//

let agendador6= document.getElementById("agendador6");

agendador6.addEventListener("submit", (e) => {
  e.preventDefault();
  let Nome6 = document.getElementById("Nome6").value;
  let Contato6 = document.getElementById("Contato6").value;
  localStorage.setItem("Nome6", JSON.stringify(Nome6));
  localStorage.setItem("Contato6", JSON.stringify(Contato6));
  alert("Você está Agendado (a)! Obrigado!");
});

function Editar6() {
  Nome6.value = "";
  Contato6.value = "";
  localStorage.removeItem("Nome6");
  localStorage.removeItem("Contato6");
}

function tela6(){

if(localStorage.hasOwnProperty("Nome6")&&localStorage.hasOwnProperty("Contato6")){

Nome6.value = JSON.parse(localStorage.getItem("Nome6"))
Contato6.value =JSON.parse(localStorage.getItem("Contato6"))
document.getElementById("Nome6").blur();
document.getElementById("Contato6").blur();
document.getElementById("Contato6").style.backgroundColor="black"
document.getElementById("Contato6").style.height="4px"
document.getElementById("Contato6").style.marginTop="10px"
document.getElementById("enviador6").style.backgroundColor="#ff5248"
document.getElementById("enviador6").value = "Agendado"
document.getElementById("enviador6").disabled = true;
document.getElementById("enviador6").cursor ="none";
}else{
  document.getElementById("enviador6").style.backgroundColor="rgb(135, 235, 105)"
  document.getElementById("enviador6").value = "Agendar"
  document.getElementById("Nome6").blur;
  document.getElementById("Contato6").blur;
  document.getElementById("Contato6").style.backgroundColor=""
document.getElementById("Contato6").style.height=""
document.getElementById("Contato6").style.marginTop=""
  document.getElementById("enviador6").style.disabled = false;


}
}setInterval(tela6,10)




//Nome7 e Contato7//


let agendador7= document.getElementById("agendador7");

agendador7.addEventListener("submit", (e) => {
  e.preventDefault();
  let Nome7 = document.getElementById("Nome7").value;
  let Contato7 = document.getElementById("Contato7").value;
  localStorage.setItem("Nome7", JSON.stringify(Nome7));
  localStorage.setItem("Contato7", JSON.stringify(Contato7));
  alert("Você está Agendado (a)! Obrigado!");
});

function Editar7() {
  Nome7.value = "";
  Contato7.value = "";
  localStorage.removetem("Nome7");
  localStorage.removeItem("Contato7");
}

function tela7(){

if(localStorage.hasOwnProperty("Nome7")&&localStorage.hasOwnProperty("Contato7")){

Nome7.value = JSON.parse(localStorage.getItem("Nome7"))
Contato7.value =JSON.parse(localStorage.getItem("Contato7"))
document.getElementById("Nome7").blur();
document.getElementById("Contato7").blur();
document.getElementById("Contato7").style.backgroundColor="black"
document.getElementById("Contato7").style.height="4px"
document.getElementById("Contato7").style.marginTop="10px"
document.getElementById("enviador7").style.backgroundColor="#ff5248"
document.getElementById("enviador7").value = "Agendado"
document.getElementById("enviador7").disabled = true;
document.getElementById("enviador7").style.cursor ="none";
}else{
  document.getElementById("enviador7").style.backgroundColor="rgb(135, 235, 105)"
  document.getElementById("enviador7").value = "Agendar"
  document.getElementById("Nome7").blur;
  document.getElementById("Contato7").blur;
  document.getElementById("Contato1").style.backgroundColor=""
document.getElementById("Contato7").style.height=""
document.getElementById("Contato7").style.marginTop=""
  document.getElementById("enviador7").style.disabled = false;


}
}setInterval(tela7,10)
