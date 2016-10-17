function validateForm(){
	var name = document.getElementById('name').value;
	var lastname = document.getElementById('lastname').value;
	var patron = /^[A-Z][a-z]*$/;
	validatePass();
	if (!patron.test (name)) {
		alert('Ingrese su nombre con la primera letra mayúscula');
		return false;
	}	
	if (!patron.test (lastname)) {
		alert('Ingrese su apellido con la primera letra mayúscula');
		return false;	
	}

	function validatePass(){
		var pass = document.getElementById('input-password').value;
		if((pass.length < 6) /*|| (pass  === 'password') || (pass === '123456') || (pass ==='0987654')*/){
			alert('Elija otra contraseña. Minimo debe contener 6 caractes');
			return false;
		}
		if( !(/^\d{6}$/.test(pass)) ) {
			alert('Elija otra contraseña. No puede contener numeros consecutivos');
 			return false;
}

	}

}