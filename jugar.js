let palabraSeleccionada;
let cantidadIntentosFallidos = 0; //cuantas veces fallé
let cantidadAciertos = 0; //cuantas letras adivine

let palabrasJuego = ["ALURA", "ORACLE", "ONE", "JAVASCRIPT","HTML", "CSS","UNIVERSO","PLANETAS","LUNA","ESTRELLAS","COMETA","ASTEROIDE","ECLIPSE","NEPTUNO","GALAXIA"];
console.log(palabrasJuego);


function cargarPalabras() {
    palabrasJuego = localStorage.getItem("listPalabras").split(",");
}
cargarPalabras();


const btnComenzar = id("comenzarJ");
const imgAhorcado = id("imgAhorcado");
const botonesLetras = document.querySelectorAll( "#Letras-botones button" );


/*Iniciando el Juego */
btnComenzar.addEventListener("click",iniciar);


function iniciar(event){
    imgAhorcado.src ="imagenes/imagenes0.png"
    btnComenzar.disabled = true;
    cantidadIntentosFallidos = 0;
    cantidadAciertos = 0;

    const parrafo = id ("palabra-Adivinando");
    parrafo.innerHTML = ""; /*cada vez que se cargue se volvera a formatear los span */
    
    const cantidad_palabras = palabrasJuego.length;
    const valor_azar = obtener_random(0,cantidad_palabras);

    palabraSeleccionada = palabrasJuego[valor_azar];
    console.log(palabraSeleccionada);
    const cantidad_letras = palabraSeleccionada.length; /*creando los span para las letras */

    
    for( let i = 0; i < botonesLetras.length ; i++ ){
        botonesLetras[ i ].disabled = false;
}

    /*por cada letra que tenga la palabra cree un span */
    for(let i = 0; i < cantidad_letras; i++) { 
        const span = document.createElement("span"); /*creación de la etiqueta span */
        parrafo.appendChild (span); /*agregando span al párrafo */

    }
    
}

/* click adivinar letra */
for( let i = 0; i < botonesLetras.length ; i++ ){
    botonesLetras[ i ].addEventListener( "click", click_letras );
}

function click_letras(event){
    const spans = document.querySelectorAll( "#palabra-Adivinando span");
    const button = event.target; //que letra llamó a la función.
    button.disabled = true;

    
    const letra = button.innerHTML.toLowerCase( );
    const palabras = palabraSeleccionada.toLowerCase( ); // .toUpperCase( )

    let acerto = false;
    for( let i = 0; i < palabras.length;  i++ ){
        if( letra == palabras[i] ){
            //la variable i es la posición de la letra en la palabra.
            //que coincide con el span al que tenemos que mostarle esta letra...
            spans[i].innerHTML = letra;
            cantidadAciertos++;
            acerto = true;
        }
    }
    if( acerto == false ){
        cantidadIntentosFallidos++;
        const source = `imagenes/imagenes${cantidadIntentosFallidos}.png`; /*crear cadena de texto,procesando la variable */
        imgAhorcado.src = source;
    }

    if( cantidadIntentosFallidos == 7 ){ 
        swal.fire({
        title:"Perdiste, la palabra era " + palabraSeleccionada,
        imageUrl:'imagenes/perdedor.jpg',
        imageWidth: 500,
        imageheight: 200,
        })
        game_over( );
    }else if( cantidadAciertos == palabraSeleccionada.length ){
        swal.fire({
        title:"FELICIDADES ¡¡GANASTE!!",
        imageUrl:'imagenes/ganador.jpg',
        imageWidth: 500,
        imageheight: 200,
    })
        game_over( );
        
    }
    console.log( "la letra " + letra + " en la palabra " + palabras + " ¿existe?: " + acerto );
    
}

/* fin del juego */
function game_over( ){
    for( let i = 0; i < botonesLetras.length ; i++ ){
        botonesLetras[ i ].disabled = true;
    }

    btnComenzar.disabled = false;
}

game_over( );






