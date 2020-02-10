function mostrar()
{
//tomo la edad  
var laHora = document.getElementById('hora').value;

//alert (laHora);
	if(laHora>6 && laHora<12){
		laHora=1;
	}
	switch(laHora){
		case 1:
			alert("Es de mañana.");
			break;
		default:
			break;	
	}



}//FIN DE LA FUNCIÓN