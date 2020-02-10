function mostrar()
{
//tomo la edad  
	var laHora = document.getElementById('hora').value;
	if(laHora>-1 && laHora<7 || laHora>19 && laHora<25){
			laHora=1;
	}
	if(laHora>6 && laHora<12){
			laHora=2;
	}
	if(laHora>11 && laHora<20){
			laHora=3;
	}	
	switch(laHora){
		case 1:
			alert("Es de noche.");
			break;
		case 2:
			alert("Es de mañana.");
			break;	
		case 3:
			alert("Es de tarde.");
			break;	
		default:
			alert("la hora no existe.");	
	}
}//FIN DE LA FUNCIÓN