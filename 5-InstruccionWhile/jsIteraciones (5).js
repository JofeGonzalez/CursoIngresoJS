function mostrar()
{

	var sexo = prompt("ingrese f ó m .");
	while(sexo=='f' || sexo=='m'){
	document.getElementById('Sexo').value=sexo;
	exit(1);
	}

}//FIN DE LA FUNCIÓN