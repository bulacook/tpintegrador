function validar() {
    let fecha = document.getElementById("fecha");
    let hora = document.getElementById("hora");
    let personas = document.getElementById("personas");
    let error = false;
document.getElementById("validar_fecha").innerHTML = "";
document.getElementById("validar_hora").innerHTML = "";  
document.getElementById("validar_personas").innerHTML = "";  
if (fecha.value == "") {
        document.getElementById("validar_fecha").innerHTML = "Debe seleccionar fecha";
        error = true;
        usuario.focus();
        error = true
    }
    if (hora.value == "") {
        document.getElementById("validar_hora").innerHTML = "Debe seleccionar hora";
        error = true;
        clave.focus();
        error = true
    }
    if (personas.value == "") {
        document.getElementById("validar_personas").innerHTML = "Debe completar este campo";
        error = true;
        usuario.focus();
        error = true
    }
    
 
    if (error == false) {
        alert("Dato enviado")
        document.getElementById("fecha").value = ""
        document.getElementById("validar_fecha").innerHTML = "";
        document.getElementById("hora").value = ""
        document.getElementById("validar_hora").innerHTML = "";
        document.getElementById("personas").value = ""
        document.getElementById("validar_personas").innerHTML = "";
    }




    if (error)
        return false;
    else
        return true;
}