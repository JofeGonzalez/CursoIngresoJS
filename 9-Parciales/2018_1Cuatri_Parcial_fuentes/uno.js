
function mostrar()
{
	var altura;
	var base;
	var perimetro;

	altura=parseInt(prompt("Ingrese la altura del rectangulo"));
	base=parseInt(prompt("Ingrese la base del rectangulo"));
	perimetro=(base+base+altura+altura);
	alert("El perimetro del rectangulo es: " +perimetro);
}
