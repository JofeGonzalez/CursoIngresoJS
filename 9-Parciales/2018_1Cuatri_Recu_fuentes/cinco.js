function mostrar()
{
	var nombreCliente;
	var edadCliente;
	var sexoCliente;
	var tipoTransaccion;
	var importe;
	var respuesta;
	var cantidadClientes=0;
	var sumaEdadCliente=0;

	do
	{
		do{
			nombreCliente=prompt("Ingrese el nombre del cliente");
		}while(!isNaN(nombreCliente));
		do{
			edadCliente=parseInt(prompt("Ingrese la edad del cliente"));
		}while(isNaN(edadCliente) || edadCliente<18 || edadCliente>99);
		do{
			sexoCliente=prompt("Ingrese el sexo del cliente 'f' o 'm'");
		}while(!isNaN(sexoCliente) && sexoCliente!='f' && sexoCliente!='m');
		do
		{
			tipoTransaccion=prompt("Ingrese el tipo de transaccion (extraccion o deposito)");
		}while(!isNaN(tipoTransaccion) && tipoTransaccion!='extraccion' && tipoTransaccion!='deposito');
		do
		{
			importe=parseInt(prompt("Ingrese el importe de la transaccion"));
		}while(isNaN(importe) || importe<0 || importe>5000);
		cantidadClientes++;
		sumaEdadCliente=sumaEdadCliente+edadCliente


		respuesta=prompt("Quiere ingresar otros datos?");
	}while(respuesta=='si');
	document.write("El promedio de edades es " +sumaEdadCliente/cantidadClientes);
}