function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var num;
	num=Math.floor(Math.random()*10)+1;
	if(num>=9){
		alert("EXCELENTE");
	}
	if(num>=4 && num<9){
		alert("APROBÓ");
	}
	if(num<4){
		alert("Vamos, la proxima se puede")
	}
}//FIN DE LA FUNCIÓN