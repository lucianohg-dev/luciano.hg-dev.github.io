// funçao trocatexto//
var texto = [
  "O Barbeiro sabe que a beleza está nos mínimos detalhes !",
  "Fazendo sua cabeça",
  "Cabelo na regua ",
  "Jesus te ama",
  "É o trato no Visual !",
];

var textoatual = 0;

function trocatexto() {
  textoatual = (textoatual + 1) % 5;
  document.getElementById("banner-texto").textContent = texto[textoatual];
}
setInterval(trocatexto, 5000);
//fim da funçao trocatexto//



//Inicio menu hamburgue //

var menu1 = document.querySelector("#menu1");
var menu2 = document.querySelector("#menu2");
var link = document.querySelector("#link");
menu2.style.display = "none";

menu1.addEventListener("mouseover", function () {
  if (menu2.style.display === "none") {
    menu2.style.display = "block";
    menu1.style.background = "none";
  }
});

menu2.addEventListener("mouseover", function () {
  if ((link1.addEventListener = "mouseover")) {
    menu2.style.display = "block";
    menu1.style.backgroundImage = "none";
  }
});

menu2.addEventListener("mouseout", function () {
  if (menu2.style.display === "block") {
    menu2.style.display = "none";
    menu1.style.backgroundImage = "";
  }
});

//fim menu hamburgue//





// inicio de placa de aviso loja aberta ou fechada//
function hora() {
  var hora = document.getElementById("hora");
  var aberto = document.getElementById("aberto");
  var fechado = document.getElementById("fechado");
  var semana = [
    "Domingo",
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sábado",
  ];
  var dia = new Date();

  document.getElementById("dia").textContent = semana[dia.getDay("pt-br")];

  hora.textContent = new Date().toLocaleTimeString("pt-br");


    if(dia.textContent = "Domingo" && hora.textContent >="00:00:00"&& hora.textContent <= "09:00:00"){

      fechado.style.display = "block";
      
      }     
      
      if(dia.textContent = "Domingo" && hora.textContent >="09:00:00"&& hora.textContent <= "19:00:00"){
      aberto.style.display = "block";
      }
      
      if(dia.textContent = "Domingo" && hora.textContent >="19:00:00"|| hora.textContent <= "00:00:00"){
        fechado.style.display = "block";
        }
          

        if(dia.textContent = "Terça-Feira" && hora.textContent >="00:00:00"&& hora.textContent <= "09:00:00"){

          fechado.style.display = "block";
          
          }            
          if(dia.textContent = "Terça-Feira" && hora.textContent >="09:00:00"&& hora.textContent <= "19:00:00"){
          aberto.style.display = "block";
          }
            
        
          if(dia.textContent = "Terça-Feira" && hora.textContent >="19:00:00"|| hora.textContent <= "00:00:00"){
            fechado.style.display = "block";
            }

        if(dia.textContent = "Quarta-Feira" && hora.textContent >="00:00:00"&& hora.textContent <= "09:00:00"){
        
          fechado.style.display = "block";
          
          }
            
          if(dia.textContent = "Quarta-Feira" && hora.textContent >="09:00:00"&& hora.textContent <= "19:00:00"){
          aberto.style.display = "block";
          }
            
          if(dia.textContent = "Quarta-Feira" && hora.textContent >="19:00:00"|| hora.textContent <= "00:00:00"){
            fechado.style.display = "block";
            }
            
            if(dia.textContent = "Quinta-Feira" && hora.textContent >="00:00:00"&& hora.textContent <= "09:00:00"){
        
              fechado.style.display = "block";
              
              }
              
        
              if(dia.textContent = "Quinta-Feira" && hora.textContent >="09:00:00"&& hora.textContent <= "19:00:00"){
              aberto.style.display = "block";
              }
              
        
              if(dia.textContent = "Quinta-Feira" && hora.textContent >="19:00:00"|| hora.textContent <= "00:00:00"){
                fechado.style.display = "block";
                }
                  
                
                
            if(dia.textContent = "Sexta-Feira" && hora.textContent >="00:00:00"&& hora.textContent <= "09:00:00"){
        
              fechado.style.display = "block";
              
              }
                
              
        
              if(dia.textContent = "Sexta-Feira" && hora.textContent >="09:00:00"&& hora.textContent <= "19:00:00"){
              aberto.style.display = "block";
              }
            
        
              if(dia.textContent = "Sexta-Feira" && hora.textContent >="19:00:00"|| hora.textContent <= "00:00:00"){
                fechado.style.display = "block";
                }
                  
        
                
                if(dia.textContent = "Sábado" && hora.textContent >="00:00:00"&& hora.textContent <= "09:00:00"){
        
                  fechado.style.display = "block";
                  
                  }
                    
        
                  if(dia.textContent = "Sábado" && hora.textContent >="09:00:00"&& hora.textContent <= "19:00:00"){
                  aberto.style.display = "block";
                  }

        
                  if(dia.textContent = "Sábado" && hora.textContent >="19:00:00"|| hora.textContent <= "00:00:00"){
                    fechado.style.display = "block";
                    }
                      
                    

  }

setInterval(hora, 10);


//Função para o dia de folga//
function SegundaFeira(){
  if (dia.textContent =="Segunda-Feira") {
    fechado.style.display = "block";
  }
}
setInterval(SegundaFeira,10)
//Fim da Função dia de folga//


// final de placa de aviso loja aberta ou fechada//





// Começo da Funçao slide body1//

let contador = 1;
let bar1 = document.getElementById("bar1");
let bar2 = document.getElementById("bar2");
let bar3 = document.getElementById("bar3");
let bar4 = document.getElementById("bar4");
let bar5 = document.getElementById("bar5");
setInterval(function () {
  document.getElementById("slide" + contador).checked = true;
  contador++;

  if (contador > 5) {
    contador = 1;
  }

  if (contador == 2) {
    bar1.style.backgroundColor = "rgb(36, 163, 36)";
  } else {
    bar1.style.backgroundColor = "";
  }

  if (contador == 3) {
    bar2.style.backgroundColor = "rgb(36, 163, 36)";
  } else {
    bar2.style.backgroundColor = "";
  }

  if (contador == 4) {
    bar3.style.backgroundColor = "rgb(36, 163, 36)";
  } else {
    bar3.style.backgroundColor = "";
  }

  if (contador == 5) {
    bar4.style.backgroundColor = "rgb(36, 163, 36)";
  } else {
    bar4.style.backgroundColor = "";
  }

  if (contador == 1) {
    bar5.style.backgroundColor = "rgb(36, 163, 36)";
  } else {
    bar5.style.backgroundColor = "";
  }
}, 4000);

// Final da Funçao slide body1//







// inicio da Funçao receber like//

function addlike(){

  localStorage.setItem(likes, JSON.stringify(0));
}


function addlike(){

  localStorage.like++
}
 

let totall = document.getElementById("totall");
function telike(){

  totall.textContent =  JSON.parse(localStorage.getItem("likes"));
  
  }
  setInterval(telike,10)


// final da Funçao receber like//




