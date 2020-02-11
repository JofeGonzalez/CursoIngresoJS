function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var num;
	var opc;
	opc=prompt("Quiere ingresar un numero?");
	while(respuesta==opc){
		num=prompt("Ingrese un numero");
		num=parseInt(num);
		contador++;
		acumulador=acumulador+num;
		if(respuesta==opc){
			opc=prompt("Quiere ingresar otro numero?");
		}
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN