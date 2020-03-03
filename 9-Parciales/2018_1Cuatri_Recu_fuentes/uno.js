/*
b)Para la gestión de un hotel,
ingresar los siguientes datos validados de una reserva
nombre del huésped
cantidad de personas 
cantidad de dia de estadia 
forma de pago(efectivo , tarjeta o QR)

informar el huésped que trajo más personas en
una sola reserva.

la cantidad de personas que se quedaron más días
la forma de pago más utilizada.
el promedio de cantidad de días por reserva
*/
function mostrar()
{
	var nombre;
	var CantidadPersonas;
	var CantidadDias;
	var FormaDePago;
	var MaxCantidadPersonas;
	var MaxCantidadDiasCantidadPersonas;
	var	MaxCantidadDias;
	var MaxCantidadDiasNombre;
	var ContadorFormaDePagoEfectivo;
	var ContadorFormaDePagoTarjeta;
	var ContadorFormaDePagoQR;
	var FormaDePagoMasUtilizada;
	var respuesta;
	var SumaCantidadDias=0;
	var Reservas=0;
	var contador=0;
	do
	{
		do
		{
			nombre=prompt("Ingrese el nombre del huesped");
		}while(!isNaN(nombre));
		do
		{
			CantidadPersonas=parseInt(prompt("Ingrese la cantidad de personas que trae el huesped"));
		}while(isNaN(CantidadPersonas) || (CantidadPersonas<1 && CantidadPersonas>20));
		do
		{
			CantidadDias=prompt("Ingrese la cantidad de dias de la reserva");
		}while(isNaN(CantidadDias) || (CantidadDias<1 && cantidadDias>15));
		do
		{
			FormaDePago=prompt("Ingrese la forma de pago (efectivo, tarjeta o QR");
		}while(!isNaN(FormaDePago) && (FormaDePago!='efectivo' && FormaDePago!='tarjeta' && FormaDePago!='QR'));
		Reservas++;
		SumaCantidadDias=SumaCantidadDias+CantidadDias;
		if(contador==0 || CantidadPersonas<MaxCantidadPersonas)
		{
			MaxCantidadPersonas=CantidadPersonas;
			maxCantidadPersonasNombre=nombre;
		}
		if(contador==0 || CantidadDias<MaxCantidadDias)
		{
			MaxCantidadDias=CantidadDias;
			MaxCantidadDiasCantidadPersonas=CantidadPersonas;
		}
		switch(FormaDePago)
		{
			case 'efectivo':
				ContadorFormaDePagoEfectivo++;
				break;
			case 'tarjeta':
				ContadorFormaDePagoTarjeta++;
				break;
			default:
				ContadorFormaDePagoQR++;
				break;
		}
		if(ContadorFormaDePagoQR>ContadorFormaDePagoTarjeta && ContadorFormaDePagoQR>ContadorFormaDePagoEfectivo)
		{
			FormaDePagoMasUtilizada='QR';
		} else
		{
			if(ContadorFormaDePagoTarjeta>ContadorFormaDePagoEfectivo)
			{
				FormaDePagoMasUtilizada='tarjeta';
			} else
			{
				FormaDePagoMasUtilizada='efectivo';
			}
		}
		respuesta=prompt("Quiere ingresar otros datos?");	
	}while(respuesta=='si');
	document.write("El huésped que trajo mas personas es: " +maxCantidadPersonasNombre);
	document.write("<br>La cantidad de pesonas que se quedaron mas días es : " +MaxCantidadDiasCantidadPersonas);
	document.write("<br>La forma de pago mas utilizada es: " +FormaDePagoMasUtilizada);
	document.write("<br>El promedio de cantidad de dias por reserva es: " +SumaCantidadDias/Reservas);
}
