function id(str) {
    return document.getElementById(str);
}

function obtener_random(num_min, num_max) {
    const amplitud_valores = num_max - num_min;/* el valor mas alto menos el valor mas bajo de random */
    const valor_azar = Math.floor(Math.random( ) * amplitud_valores) + num_min;
    return valor_azar; 

}
