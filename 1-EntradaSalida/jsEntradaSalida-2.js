/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombre;

	nombre= prompt("Ingrese su nombre");
	if(nombre== null || nombre== ""){
		alert("Error!");
	} else{
	alert("Hola " + nombre + " que tal");
	}
	//Segunda prueba con GitHub por consola
}

