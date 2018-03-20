function comprobarEdad(){
    var r = confirm("Eres mayor de edad?");
    if (!r) location.href = "https://www.google.com";
}

document.oncontextmenu = function(){return false}