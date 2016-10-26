var elFormulario = document.getElementById('form-signin-heading');
//este metodo permite obtener el elemnto por medio de si id y guardarle en la variable.
elFormulario.innerHTML = 'Por favor inicia sesión';
/*este metodo agregara al elemento en el html esta cadena de texto es decir:
<h2 id="form-signing-heading>"
	Porfavor inicia sesion
</h2>*/

var elEmail = document.getElementById('inputEmail');
elEmail.setAttribute('placeholder', 'Correo electrónico');
//setAttribute agregara un atributo placeholder al elemento guardado en elEmail(input) con su valor correspondiente.

var elPass = document.getElementById('inputPassword');
elPass.setAttribute('placeholder', 'Contraseña');

// $('#inputPassword').attr('placeholder','Contraseña'); --->Segun cambia el nombre de un placeholder. Pero no resulto.

var recordarme = document.getElementsByTagName('span')[0].innerHTML = 'Recordar datos';//La posicion suplira el valor del seleccionado. creo**
/*ontiene el elemento por medio del nombre de su etiqueta. El resultado es un arreglo 
mediante el index le indicas cual de todas esas etiquetas es la que buscas.*/
var boton = document.getElementsByTagName('button')[0].innerHTML = 'Iniciar Sesión';