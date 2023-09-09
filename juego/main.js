//iniciar variables
let tarjertasDestapadas = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let primerResultado = null;
let segundoResultado = null;
let movimientos = 0;
let aciertos = 0;
let temporizador = false;
let timer = 30;
let timerInicial = 30;
let tiempoRegresicoId = null;
//apuntando html doc 
let mostrarMovimientos = document.getElementById('movimientos');
let mostrarAciertos = document.getElementById('aciertos');
let mostrarTiempo = document.getElementById('t-restante');


//generador de numeros aleatorios
let numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
numeros = numeros.sort(()=>{return Math.random()-0.5});


//Funciones
function contarTiempo (){
    tiempoRegresicoId = setInterval(()=>{
        timer --;
        mostrarTiempo.innerHTML = `Timer = ${timer} seconds`;
        if (timer == 0){
            clearInterval (tiempoRegresicoId);
            bloquearTarjetas();
        }
    },1000);
}

function bloquearTarjetas(){
    for(let i = 0; i <=15; i++){
        let tarjetaBloqueada = document.getElementById(i);
        tarjetaBloqueada.innerHTML = `<img src="../assets/card/${numeros[i]}.png" >`;
        tarjetaBloqueada.disabled = true;
    }
}

//funcion principal

function destapar (id){
    
    if (temporizador == false){
        contarTiempo();
        temporizador = true;
    }
    
    tarjertasDestapadas++;

    if(tarjertasDestapadas == 1){
        //mostrar primera movida
        tarjeta1 = document.getElementById(id);
        primerResultado = numeros[id]
        tarjeta1.innerHTML= `<img src="../assets/card/${primerResultado}.png" >`;

        //deshabilitar
        tarjeta1.disabled = true;
    }else if (tarjertasDestapadas ==2){
        //mostrar segunda movida
        tarjeta2 = document.getElementById(id);
        segundoResultado = numeros[id];
        tarjeta2.innerHTML = `<img src="../assets/card/${segundoResultado}.png" >`;
        
        //deshabilitar
        tarjeta2.disabled = true;

        //increase moves
        movimientos++;
        mostrarMovimientos.innerHTML = `Moves = ${movimientos}`;
        
        if (primerResultado == segundoResultado){
            //encerrar contator 
            tarjertasDestapadas = 0;
            //aumento aciertos
            aciertos++;
            mostrarAciertos.innerHTML = `Point = ${aciertos}`; 
            
            if (aciertos == 8){
                clearInterval (tiempoRegresicoId);
                mostrarAciertos.innerHTML = `Points = ${aciertos}✔`
                mostrarTiempo.innerHTML = `Win in = ${timerInicial - timer} seconds✔`
                mostrarMovimientos.innerHTML = `Moves = ${movimientos}✔`
            }


        }else{
            //mostrar momentaneamente y volver a tapar
            setTimeout(()=>{
                tarjeta1.innerHTML = ` `;
                tarjeta2.innerHTML = ` `;
                tarjeta1.disabled = false;
                tarjeta2.disabled = false; 
                tarjertasDestapadas = 0 ;
            },1000);
        }
    }
}