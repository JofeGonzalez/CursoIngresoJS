function mostrar()
{
	var precio;
	var descuento;
	var precioFinal;
	precio=parseInt(prompt("Ingrese el precio inicial"));
	descuento=parseInt(prompt("Ingrese el porcentaje de descuento"));
	precioFinal=precio-precio*descuento/100;
	document.getElementById('elPrecioFinal').value=precioFinal;
}
