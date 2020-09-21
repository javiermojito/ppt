//Creando las referencias
var butPiedra = document.getElementById("but-piedra");
var butPapel = document.getElementById("but-papel");
var butTijera = document.getElementById("but-tijera");

//Creando las referencias de los labels
var lblUser = document.getElementById("lbl-user");
var lblCpu = document.getElementById("lbl-cpu");
var lblFinal = document.getElementById("lbl-final");
var lblMarcadorUser= document.getElementById("lbl-put-user");
var lblMarcadorCpu = document.getElementById("lbl-put-cpu");

var puntajeUser = 0;
var puntajeCpu = 0;
   
//Arreglos
var opcionesJuego = ["PIEDRA", "PAPEL", "TIJERA"];

butPiedra.addEventListener("click", function(){
    startGame(butPiedra.value);
});
butPapel.addEventListener("click", function(){
    startGame(butPapel.value);
});
butTijera.addEventListener("click", function(){
    startGame(butTijera.value);
});

function startGame(valueUser){
    //0 -> Piedra
    //1 -> Papel
    //2 -> Tijera
    
    let userSelection = valueUser;
    let cpuSelection = getCpuResponse();
    let resultadoJuego = checkWinner(userSelection, cpuSelection);

    if(resultadoJuego == "GANASTE"){
        //sumarle puntos al usuario
        puntajeUser++;
        //puntajeUsuario +=1 ;
        //puntajeUsuario = puntajeUsuario +1;
    }
    else if(resultadoJuego == "PERDISTE"){
        //sumarle puntos a la máquina
        puntajeCpu++;
    }

    lblUser.innerHTML = opcionesJuego[userSelection];
    lblCpu.innerHTML = opcionesJuego[cpuSelection];
    lblFinal.innerHTML = resultadoJuego;
    lblMarcadorUser.innerHTML = puntajeUser;
    lblMarcadorCpu.innerHTML = puntajeCpu;
}

function checkWinner(userSel, cpuSel){
    /*
        Usuario     Máquina
        Piedra(0) > Tijera(2)
        Tijera(2) > Papel(1)
        Papel(1) > Piedra(0)
    */

    let respuesta;

    if((userSel == 0 && cpuSel == 2) || (userSel == 2 && cpuSel == 1) || (userSel == 1 && cpuSel == 0)){
        respuesta = "GANASTE";
    }
    else if(userSel == cpuSel){
        respuesta = "EMPATE";
    }
    else{
        respuesta = "PERDISTE";
    }

    return respuesta;

}

//Darme la elección de la máquina
function getCpuResponse(){

    let x = Math.floor(Math.random()*3);

    if(x == 3)
    {
        return 2;
    }

    return x;
    
}


