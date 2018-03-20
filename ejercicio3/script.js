var num = 1;

function cambiarFotoSiguiente() {
    document.getElementById("mensaje").innerHTML = "";
    if (num > 4) document.getElementById("mensaje").innerHTML = "No hay mas fotos";
    else {
        num++;
        document.getElementById("image").src = "img/foto" + num + ".jpg";
    }
}

function cambiarFotoAnterior() {
    document.getElementById("mensaje").innerHTML = "";
    if (num <= 1) document.getElementById("mensaje").innerHTML = "No hay mas fotos";
    else {
        num--;
        document.getElementById("image").src = "img/foto" + num + ".jpg";
    }
}