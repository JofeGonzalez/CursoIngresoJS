function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	if(mesDelAño=='Enero' || mesDelAño=='Marzo' || mesDelAño=='Mayo' || mesDelAño=='Julio' || mesDelAño=='Agosto' || mesDelAño=='Octubre' || mesDelAño=='Diciembre'){
		mesDelAño=1;	
	}
	if(mesDelAño=='Abril' || mesDelAño=='Junio' || mesDelAño=='Septiembre' || mesDelAño=='Noviembre'){
		mesDelAño=2;	
	}
	if(mesDelAño=='Febrero'){
		mesDelAño=3;	
	}
	switch(mesDelAño){
		case 1:
			alert("Este mes tiene 31 días.");
			break;
		case 2:
			alert("Este mes tiene 30 días.");
			break;
		case 3:
			alert("Este mes tiene 28 días.");
			break;
		default:
			break;			
	}



}//FIN DE LA FUNCIÓN