function mostrar()
{
	var sexo;
	var notas;
	var cantNotas=0;
	var sumaNotas=0;
	var NotaMinima;
	var contador=0;
	var SexoNotaMinima;
	var cantVarones=0; //Cantidad de varones cuya nota es mayor a 6
	var i;
	for(i=0; i<5; i++)
	{
		notas=parseInt(prompt("Ingrese la nota del alumno"));
		while(notas<0 || notas>10)
		{
		 	notas=parseInt(prompt("La nota ingresada no es validad, por favor intente de nuevo"));
		}
		cantNotas++;
		sumaNotas=sumaNotas+notas;
		sexo=prompt("Ingrese el sexo del alumno (f o m)");
		while(sexo!='f' && sexo!='m')
		{
			sexo=prompt("EL sexo ingresado no es valido, por favor intente de nuevo");
		}
		if(contador==0 || notas>NotaMinima)
		{
			NotaMinima=notas;
			SexoNotaMinima=sexo;
		}
		if(notas>5)
		{
			if(sexo == 'm')
			{
				cantVarones++;
			}
		}
		contador++;	
	}
	alert("El promedio de las notas totales es: " +sumaNotas/5);
	alert("La nota mas baja es: " +NotaMinima+ " y el sexo de esa persona es " +SexoNotaMinima);
	alert("La cantidad de varones que su nota haya sido mayor o igual a 6 es " +cantVarones);
}
