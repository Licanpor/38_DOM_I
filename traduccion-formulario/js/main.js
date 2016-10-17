var elFormulario = document.getElementById('form-signin-heading');
elFormulario.innerHTML = 'Por favor inicia sesión';

var elEmail = document.getElementById('inputEmail');
elEmail.setAttribute('placeholder', 'Correo electrónico');

var elPass = document.getElementById('inputPassword');
elPass.setAttribute('placeholder', 'Contraseña');

// $('#inputPassword').attr('placeholder','Contraseña'); --->Segun cambia el nombre de un placeholder. Pero no resulto.

var recordarme = document.getElementsByTagName('span')[0].innerHTML = 'Recordar datos';//La posicion suplira el valor del seleccionado. creo**

var boton = document.getElementsByTagName('button')[0].innerHTML = 'Iniciar Sesión';