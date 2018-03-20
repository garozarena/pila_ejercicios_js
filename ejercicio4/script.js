function validar() {
    document.getElementById("error").innerHTML = "";

    var email = document.getElementById("mail").value;
    var pass = document.getElementById("pass").value;
    var date = new Date(document.getElementById("date").value).getTime();
    var validated = true;
    var f = new Date().getTime();
    

    if (email == "") {
        validated = false;
        document.getElementById("error").style = "color:red";
        document.getElementById("error").innerHTML += "El campo email es obligatorio<br>";
    }

    if (pass.length < 6) {
        validated = false;
        document.getElementById("error").style = "color:red";
        document.getElementById("error").innerHTML += "La contraseña debe tener mas de 6 caracteres<br>";
    }

    if (f > date) {
        validated = false;
        document.getElementById("error").style = "color:red";
        document.getElementById("error").innerHTML += "La fecha debe ser posterior al día de hoy";
    }

    if (validated) {
        document.getElementById("error").style = "color:green";
        document.getElementById("error").innerHTML = "Datos correctos";
    }
}