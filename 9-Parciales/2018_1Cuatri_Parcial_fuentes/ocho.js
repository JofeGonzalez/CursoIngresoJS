function mostrar()
{
	var numero;
	var letra;
	var cantPares=0;
	var cantImpares=0;
	var cantCeros=0;
	var cantPositivos=0;
	var sumaPositivos=0;
	var SumaNegativos=0;
	var MaxNum=-100;
	var MinNum=100;
	var MaxNumLetra;//La letra que corresponde al mayor numero
	var MinNumLetra;//La letra que corresponde al menor numero
	var respuesta;

	do
	{
		letra=prompt("Ingrese una letra: ");
		while((letra<'A' && letra>'Z') || (letra<'a' && letra>'z')){
			letra=prompt("El dato ingresado no es una letra. Intente de nuevo");
		}
		numero=parseInt(prompt("Ingrese un numero"));
		while(numero<-100 || numero>100)
		{
			numero=parseInt(prompt("El numero ingresado no es valido, por favor intente de nuevo"));
		}
		if(numero%2==0 && numero!=0)
		{
			cantPares++;
		} else
		{
			if(numero==0)
			{
				cantCeros++;
			} else
			{
				cantImpares++;
			}
		}
		if(numero>0)
		{
			sumaPositivos=sumaPositivos+numero;
			cantPositivos++;
		} else
		{
			SumaNegativos=SumaNegativos+numero;
		}
		if(numero>MaxNum)
		{
			MaxNum=numero;
			MaxNumLetra=letra;
		}
		if(numero<MinNum)
		{
			MinNum=numero;
			MinNumLetra=letra;
		}
		respuesta=prompt("Quiere ingresar otros datos?");
	} while(respuesta == 's');
	document.write("La cantidad de numeros pares es :" + cantPares);
	document.write("<br>La cantidad de numeros impares es :" + cantImpares);
	document.write("<br>La cantidad de ceros es: " +cantCeros);
	document.write("<br>El promedio de todos los números positivos ingresados es: " +sumaPositivos/cantPositivos);
	document.write("<br>La suma de todos los números negativos es: " +SumaNegativos);
	document.write("<br>El numero maximo es: " +MaxNum+ " y su letra es " +MaxNumLetra);
	document.write("<br>El numero minimo es: " +MinNum+ " y su letra es " +MinNumLetra);
}

