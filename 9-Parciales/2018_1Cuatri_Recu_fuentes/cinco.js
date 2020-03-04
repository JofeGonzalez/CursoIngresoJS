function mostrar()
{//Inicio de funcion
	//Declaracion de variables
	var nombreCliente;
	var edadCliente;
	var sexoCliente;
	var tipoTransaccion;
	var importe;
	var respuesta;
	var cantidadCliente;
	var sumaEdadCliente;
	var promedioEdadCliente;
	var MinimoEdadCliente;//Edad del cliente mas joven
	var MinimoEdadClienteNombre;//Nombre del cliente mas joven
	var cantidadHombres;
	var cantidadMujeres;
	var importeMaximo;
	var sexoClienteImporteMaximo;
	var tipoTransaccionMasUtilizada;
	var cantidadExtraccion;
	var cantidadDeposito;
	var edadClienteMaximo;
	var importeEdadClienteMaximo;
	//Inicializacion de variables;
	cantidadCliente=0;
	sumaEdadCliente=0;
	cantidadHombres=0;
	cantidadMujeres=0;
	cantidadExtraccion=0;
	cantidadDeposito=0;
	do
	{
		do
		{ //Pido y valido el nombre del cliente
			nombreCliente=prompt("Ingrese el nombre del cliente");
		}while(!isNaN(nombreCliente));
		do
		{//Pido y valido la edad del cliente
			edadCliente=parseInt(prompt("Ingrese la edad del cliente"));
		}while(isNaN(edadCliente) || edadCliente<18 || edadCliente>99);
		do
		{//Pido y valido el sexo del cliente
			sexoCliente=prompt("Ingrese el sexo del cliente 'f' o 'm'");
		}while(!isNaN(sexoCliente) && sexoCliente!='f' && sexoCliente!='m');
		do//Pido y valido el tiop de transaccion que se realizara
		{
			tipoTransaccion=prompt("Ingrese el tipo de transaccion (extraccion o deposito)");
		}while(!isNaN(tipoTransaccion) && tipoTransaccion!='extraccion' && tipoTransaccion!='deposito');
		do//Pido y valido el importe de la transaccion
		{
			importe=parseInt(prompt("Ingrese el importe de la transaccion"));
		}while(isNaN(importe) || importe<0 || importe>5000);
		cantidadCliente++;//Aumenta el contador de cantidad de clientes
		sumaEdadCliente=sumaEdadCliente+edadCliente;//Se suma la edad del nuevo cliente al acumulador
		if(cantidadCliente==1 || edadCliente<MinimoEdadCliente)//If para el edad del cliente mas joven
		{
			MinimoEdadCliente=edadCliente;
			MinimoEdadClienteNombre=nombreCliente;
		}
		if(sexoCliente=='m')//If para cantidad de hombres y mujeres
		{
			cantidadHombres++;
		} else
		{
			cantidadMujeres++;
		}
		if(cantidadCliente==1 || importe>importeMaximo)//If para el sexo del importe mas alto
		{
			importeMaximo=importe;
			sexoClienteImporteMaximo=sexoCliente;
		}
		switch(tipoTransaccion)
		{//Switch para saber cual transaccion se utiliza mas
			case 'extraccion':
				cantidadExtraccion++;
				break;
			default:
				cantidadDeposito++;
				break;	
		}
		if(cantidadCliente==1 || edadCliente>edadClienteMaximo)//If para saber de la persona mas vieja
		{
			edadClienteMaximo=edadCliente;
			importeEdadClienteMaximo=importe;
		}	
		respuesta=prompt("Quiere ingresar otros datos?");
	}while(respuesta=='si');//cierre del do-while principal
	if(cantidadExtraccion>cantidadDeposito)//If que analiza cual es el tipo de transaccion que mas se utiliza
		{
			tipoTransaccionMasUtilizada='Extraccion';
		} else
			{
				if(cantidadExtraccion==cantidadDeposito)
				{
					tipoTransaccionMasUtilizada='Ambas transacciones';
				} else
				{
					tipoTransaccionMasUtilizada='Deposito';
				}
			}
	promedioEdadCliente=sumaEdadCliente/cantidadCliente;//Promedio entre la suma de edades y el numero de clientes
	//Imprimo los resultadios
	document.write("El promedio de edades es " +promedioEdadCliente);
	document.write("<br>El nombre del cliente mas joven es " +MinimoEdadClienteNombre);
	document.write("<br>La cantidad de hombres es " +cantidadHombres);
	document.write("<br>La cantidad de mujeres es " +cantidadMujeres);
	document.write("<br>El sexo del importe mas alto es " +sexoClienteImporteMaximo);
	document.write("<br>La operacion mas utilizada es " +tipoTransaccionMasUtilizada);
	document.write("<br>El importe del cliente mas viejo es "+importeEdadClienteMaximo);
}//Fin de la funcion