function mostrar()
{

	var acumuladorNegativos=0;
	var acumuladorPositivos=0;
	var contadorPositivos=0;
	var contadorNegativos=0;
	var contadorCeros=0;
	var contadorPares=0;
	var respuesta="si";
	var num;
	var opc;
	opc=prompt("Quiere ingresar un numero?");
	while(respuesta==opc)
	{
		num=prompt("Ingrese un numero");
		num=parseInt(num);
		if(num<0)
		{
			contadorNegativos++;
			acumuladorNegativos=acumuladorNegativos+num;
		} else
		{
			if(num==0)
			{
				contadorCeros++;
			} else
			{
				contadorPositivos++;
				acumuladorPositivos=acumuladorPositivos+num;
			}
		}
		if(num!=0 && num%2==0){
			contadorPares++;
		}

		if(respuesta==opc){
			opc=prompt("Quiere ingresar otro numero?");
		}
	}
	document.write("<br>suma de los negativos " + acumuladorNegativos);
	document.write("<br>suma de los positivos " + acumuladorPositivos);
	document.write("<br>cantidad de positivos " + contadorPositivos);
	document.write("<br>cantidad de negativos " + contadorNegativos);
	document.write("<br>cantidad de ceros " + contadorCeros);
	document.write("<br>cantidad de Pares " + contadorPares);
	document.write("<br>Promedio de los Positivos: " + acumuladorPositivos/contadorPositivos);
	document.write("<br>Promedio de los negativos: " + acumuladorNegativos/contadorNegativos);
	document.write("<br>Diferencia entre Positivos y Negativos: " + acumuladorPositivos+acumuladorNegativos);
}//FIN DE LA FUNCIÓN