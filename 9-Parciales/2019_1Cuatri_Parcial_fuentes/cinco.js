function mostrar()
{
	var continente;
	var dias;
	var metodoPago;
	var precioDia=100;
	var descuento;
	var precioInicial;
	descuento=0;
	continente=document.getElementById('Marca').value;
	dias=parseInt(prompt("Ingrese el numero de dias que desea viajar"));
	metodoPago=prompt("Ingrese el metodo de pago");
	precioInicial=precioDia*dias;

	switch(continente)
	{
		case 'América':
			switch(metodoPago)
			{
				case 'débito':
					descuento=50+10;
					alert("El precio final es: " +(precioInicial-precioInicial*descuento/100));
					break;
				default:
					descuento=50;
					alert("El precio final es: " +(precioInicial-precioInicial*descuento/100));	
			}
			break;
		case 'África':
			switch(metodoPago)
			{	
				case 'mercadoPago':
				case 'efectivo':
					descuento=60+15;
					alert("El precio final es: " +(precioInicial-precioInicial*descuento/100));
					break;
				default:
					descuento=60;
					alert("El precio final es: " +(precioInicial-precioInicial*descuento/100));	
					break;
			}
			break;
		case 'Europa':
			switch(metodoPago)
			{
				case 'débito':
					descuento=20+15;
					alert("El precio final es: " +(precioInicial-precioInicial*descuento/100));
					break;
				case 'mercadoPago':
					descuento=20+10;
					alert("El precio final es: " +(precioInicial-precioInicial*descuento/100));	
					break;
				default:
					descuento=20+5;
					alert("El precio final es: " +(precioInicial-precioInicial*descuento/100));	
					break;
			}
			break;
		case 'Asia':
		case 'Oceania':
			descuento=-20;
			alert("El precio final es: " +(precioInicial-precioInicial*descuento/100));
			break;		
		default:
			break;
	}
}
