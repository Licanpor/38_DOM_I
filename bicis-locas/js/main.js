function validateForm(){
	var name = document.getElementById('name').value;
	var lastname = document.getElementById('lastname').value;
	var pass = document.getElementById('input-password').value;
	var mail = document.getElementById('input-email').value;
	var reName = /^[A-Z][a-z]*$/;
	var rePass = /^\d{6}$/;
	var errores = true;
	var mensaje = " ";
	
	if (!reName.test (name)) {
		mensaje += 'Ingrese su nombre con la primera letra mayúscula ';
		errores = false;
	}	
	if (!reName.test (lastname)) {
		mensaje += 'Ingrese su apellido con la primera letra mayúscula ';
		errores = false;	
	}
	if((pass.length < 6) || (pass  === 'password') || (!rePass.test(pass))){
		mensaje += 'Elija otra contraseña. Minimo debe contener 6 caractes ';
		errores = false;
	}
	if(!errores){
		alert(mensaje);
	}
return errores;
}
