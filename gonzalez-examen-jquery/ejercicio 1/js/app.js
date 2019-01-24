function validar(){
    var nombre = document.forms["registro"]["nombre"];
    var apellidos = document.forms["registro"]["apellido"];
    var nacimiento = document.forms["registro"]["nacimiento"];
    if(nombre.value==""){
        nombre.focus();
        nombre.style.border = "1px solid red";
        return false;
    } else if(apellidos.value==""){
        apellidos.focus();
        apellidos.style.border = "1px solid red";
        return false;
    } else if(nacimiento.value==""){
        nacimiento.focus();
        nacimiento.style.border = "1px solid red";
        return false;
    } else {
        alert("El formulario es correcto");
    }
};