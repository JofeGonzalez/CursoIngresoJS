function mostrar()
{
	var pais;
	var habitantes;
	var temperatura;
	var cantTemperaturaPares=0;//Esta variable son los paises mayor a 40 grados de temperatura
	var MenosHabitantes=7000;
	var cantPaisesTemperatura=0;
	var cantPaises=0;
	var TemperaturaMinima=50;
	var PaisTemperaturaMinima;
	var PaisMenosHabitantes;
	var SumaHabitantes=0;
	var respuesta;
	do{
		pais=prompt("Ingrese el nombre del pais: ");
		cantPaises++;
		habitantes=parseInt(prompt("ingrese el numero de habitantes: "));
		while(habitantes<0 || habitantes>7001)
		{
			habitantes=parseInt(prompt("El numero de habitantes ingresado es incorrecto, por favor intente de nuevo"));
		}
		SumaHabitantes=SumaHabitantes+habitantes;
		if(habitantes<MenosHabitantes)
		{
			MenosHabitantes=habitantes;
			PaisMenosHabitantes=pais;
		}
		temperatura=parseInt(prompt("Ingrese la temperatura del pais: "));
		while(temperatura<-50 || temperatura>50)
		{
			temperatura=parseInt(prompt("La temperatura ingresada es incorrecta, por favor intente de nuevo"));
		}
		if(temperatura%2==0 && temperatura!=0)
		{
			cantTemperaturaPares++;
		}
		if(temperatura>40)
		{
			cantPaisesTemperatura++;
		}
		if(temperatura<TemperaturaMinima)
		{
			TemperaturaMinima=temperatura;
			PaisTemperaturaMinima=pais;
		}
		respuesta=prompt("Quiere ingresar mas datos?");
	} while(respuesta=='si');
	document.write("La cantidad de temperaturas pares es: " + cantTemperaturaPares);
	document.write("<br>El nombre del pais con menos habitantes: " + PaisMenosHabitantes);
	document.write("<br>La cantidad de paises que superan los 40 grados son: " + cantPaisesTemperatura);
	document.write("<br>El promedio de habitantes entre los paises ingresados es: " + SumaHabitantes/cantPaises);
	document.write("<br>La temperatura minima ingresada es :" +TemperaturaMinima+ " y el nombre del pais que registro esa temperatura es: " + PaisTemperaturaMinima);
}
