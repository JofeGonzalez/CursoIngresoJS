/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var ancho;
	var resultado;
	largo=document.getElementById('Largo').value;
	largo=parseInt(largo);
	ancho=document.getElementById('Ancho').value;
	ancho=parseInt(ancho);
	resultado=(largo*ancho*3);
	alert("La cantidad de alambre necesaria para el terreno rectangular es: " + resultado);
}
function Circulo () 
{
	var radio;
	var resultado;
	radio=document.getElementById('Radio').value;
	radio=parseInt(radio);
	resultado=((2*3.14*radio)*3);
	alert("La cantidad de alambre necesaria para el terreno circular es: " + resultado)
}
function Materiales () 
{
	var largo;
	var ancho;
	var BolsasCemento;
	var BolsasCal;
	var resultado;
	largo=document.getElementById('Largo').value;
	largo=parseInt(largo);
	ancho=document.getElementById('Ancho').value;
	ancho=parseInt(ancho);
	resultado=(largo*ancho);
	BolsasCemento=(resultado/2);
	BolsasCal=(resultado/3);
	alert("La cantidad de bolsas de cemento necesarias es: "+BolsasCemento+" y la cantidad de bolsas de cal es: "+BolsasCal+".");
}