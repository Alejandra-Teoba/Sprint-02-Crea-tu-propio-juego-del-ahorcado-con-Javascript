/* Instrucciones del juego */
function Instrucciones() {
    valor = document.getElementById("instrucciones").onclick;
    swal.fire({
        imageUrl:'imagenes/ins.jpg',
        imageWidth: 500,
        imageheight: 200,
    })
}


/*enlace para entrar al juego */
function pagina_juego () {
    location.href="ahorcado.html";
}


/*enlace para volver a la página de incio */
function pagina_inicio (){
    location.href="index.html";
}


/*aparecer input para agregar palabra */
function mostrar() {
    valor = document.getElementById('AgregarPalabra').onclick;
    document.getElementById("palabraNueva").style.display = 'block';

    valor = document.getElementById('AgregarPalabra').onclick;
    document.getElementById("agregada").style.display = 'block';
}

/* verificando el input de agregar palabra contenga texto */

const input = document.querySelector("#palabraNueva");
const button = document.querySelector("#agregada");


button.addEventListener("click",()=>{
    if(input.value.length == 0){
        swal.fire({
        title:"El campo esta vacío",
        imageUrl:"imagenes/Vacío.png",
        imageWidth: 500,
        imageheight: 200,
    })
    }  
     
})


/*Agregando una nueva palabra al array */
var buttonP = document.getElementById("agregada").toUpperCase;

function agregarPalabra() {
    var nuevaPalabra = document.getElementById("palabraNueva").value;
    palabrasJuego.push(nuevaPalabra.toLowerCase());
}
		
function almacenarPalabrasNavegador(){
    localStorage.setItem("listPalabras",palabrasJuego);
}

buttonP.addEventListener("click",()=>{
    agregarPalabra();
    almacenarPalabrasNavegador();
});



