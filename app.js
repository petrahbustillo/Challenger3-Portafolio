function validar(){
    var form = document.form;

    if(form.nombre.value==0){
        alert("Ingrese su nombre");
        form.nombre.value="";
        form.nombre.focus();
        return false; 
    }

    if(form.email.value==0){
        alert("Ingrese su correo electrónico");
        form.email.value="";
        form.email.focus(); 
        return false;
    }

    if(form.asunto.value==0){
        alert("Ingrese el asunto");
        form.asunto.value="";
        form.asunto.focus(); 
        return false;
    }

    if(form.mensaje.value==0){
        alert("Ingrese el mensaje");
        form.mensaje.value="";
        form.asunto.focus();
        return false;
    }
    alert("Datos enviados con éxito");
    form.reset();
}

