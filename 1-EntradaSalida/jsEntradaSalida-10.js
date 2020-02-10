/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
//	var importe;
//	var resultado;

//	importe=document.getElementById('importe').value;
//	importe=parseInt(importe);
//	resultado=(importe-((importe*25)/100))
//	document.getElementById('resultado').value=resultado;

	var importe;
	var porcentaje;
	var resultado;


	importe=document.getElementById('importe').value;
	importe=parseInt(importe);
	porcentaje=prompt("Ingrese el porcentaje");
	porcentaje=parseInt(porcentaje);

	if(porcentaje >= 0){
		resultado=(importe+(importe*porcentaje/100));
	}
	if(porcentaje <= 0){
		resultado=(importe+(importe*porcentaje/100));
	}
	document.getElementById('resultado').value=resultado;
}