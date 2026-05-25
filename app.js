/*
DOM document Object Model
*/

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 50;

function asignacionDeTexto(elemento,texto){              //funcion de asignacion de texto 
    let elementoHTML = document.querySelector(elemento); // Seleccion de el elemento de HTML
    elementoHTML.innerHTML = texto;                     // titulo es un objeto y el innerHTML es el metodo 
    return;
}

function verificarIntento(){               //funcion del boton de intentos 
    // se manda a llamar el valor de la varia valorUsuario
    //parseInt es para transformar el tipo de valor a numero 
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //El triple igual compara valor y tipo de dato
    if(numeroDeUsuario === numeroSecreto){ // Condicion
        asignacionDeTexto('p', `Acertaste el numero en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if(numeroDeUsuario > numeroSecreto){ // el usuario no acerto 
        asignacionDeTexto('p','El numero secreto es menor');
    } else{
        asignacionDeTexto('p','El numero secreto es mayor');
    }
    intentos++;
    limpiarCaja();
    return;
} 

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si el numerogenerado esta incluido en la lista 
    if(listaNumerosSorteados.length ==numeroMaximo){
        asignacionDeTexto('p','Ya se sortearon todos los numeros posibles')
    } else{
        //Si el numero generado esta incluido en la lista 
    //el incluides permite revisar si el valor existe en el arreglo 
    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
    }
}

function limpiarCaja() {
    return document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales() {
    asignacionDeTexto('h1', 'Juego del numero secreto');  // titulo del juego
    asignacionDeTexto('p', `Indique un numero del 1 al ${numeroMaximo}`);  // indicacion de las acciones del juego
    //Generar el numero aleatorio
    numeroSecreto = generarNumeroSecreto();
    //inicializar el numero intentos 
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego 
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();

