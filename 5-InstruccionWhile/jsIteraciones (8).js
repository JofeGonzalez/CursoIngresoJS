function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta='si';
	opc=prompt("Quiere ingresar un numero?");
	while(respuesta==opc){
		num=prompt("Ingrese un numero");
		num=parseInt(num);
		contador++;
		if(num>0){
			positivo=positivo+num;
		} else{
			negativo=negativo*num;
		}
		if(respuesta==opc){
			opc=prompt("Quiere ingresar otro numero?");
		}
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN