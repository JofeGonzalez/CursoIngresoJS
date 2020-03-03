function mostrar()
{
	var alt;
	var sex;
	var i;
	var SumaAlt=0;
	var altMin;
	var sexAltMin;
	var CantMuj=0;
	var contador=0;

	for(i=1; i<6; i++)
	{
		alt=prompt("Ingrese alt");
		alt=parseInt(alt);
		if(alt<0 || alt>250)
		{
			alert("Altura no permitida");
		} else
		{
			SumaAlt=SumaAlt+alt;
		}
		sex=prompt("Ingrese el sexo");
		if(sex!="f" && sex!="m")
		{
			alert("Sexo invalido");
		} else
		{
			if(contador==0 || altMin<alt)
			{
				altMin=alt;
				sexAltMin=sex;
			}
		}
		if(alt>189 && sex=="f")
		{
			CantMuj++;
		}
	}

	alert("El promedio de las alturas es: " + SumaAlt/5);
	alert("La altura mas baja es: " + altMin + " y el sexo es: " + sexAltMin);
	alert("La cantidad de mujeres que miden mas de 190 es: " + CantMuj);
}
