function mostrar()
{
//tomo la edad  
	var mesDelAño = document.getElementById('mes').value;

	if(mesDelAño=='Enero' || mesDelAño=='Febrero' || mesDelAño=='Marzo' || mesDelAño=='Abril' || mesDelAño=='Mayo' || mesDelAño=='Junio'){
		mesDelAño=1;	
	}
	if(mesDelAño=='Julio' || mesDelAño=='Agosto'){
		mesDelAño=2;	
	}
	if(mesDelAño=='Septiembre' || mesDelAño=='Octubre' || mesDelAño=='Noviembre' || mesDelAño=='Diciembre'){
		mesDelAño=3;	
	}
	switch(mesDelAño){
		case 1:
			alert("Falta para el invierno.");
			break;
		case 2:
			alert("Abrigate que hace frio.");
			break;
		case 3:
			alert("Ya pasamos el frio, ahora calor!!!.");
			break;
		default:
			break;			
	}



}//FIN DE LA FUNCIÓN