function mostrar()
{

	var contador=0;
	// declarar variables
	var num;
	var num1=0;
	var num2=0;
	var respuesta='si';
	var opc;
	opc=prompt("Quiere ingresar un numero?");
	while(respuesta==opc){
		num=prompt("Ingrese un numero");
		num=parseInt(num);
		contador++;
		if(num>num1){
			num1=num;
		} else{
			num2=num;
		}
		if(respuesta==opc){
			opc=prompt("Quiere ingresar otro numero?");
		}
	}
	document.getElementById('maximo').value=num1;
	document.getElementById('minimo').value=num2;



}//FIN DE LA FUNCIÓN