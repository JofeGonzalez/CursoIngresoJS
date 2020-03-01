function mostrar()
{
	var num;
	var letra;
	var contPares=0;
	var contImpares=0;
	var contCeros=0;
	var SumaPositivos=0;
	var contPositivos=0;
	var SumaNegativos=0;
	var Max=0;
	var Min=0;
	var LetraMax;
	var LetraMin;
	var respuesta;
	do
	{
		letra=prompt("Ingrese una letra: ");
		while((letra<'A' && letra>'Z') || (letra<'a' && letra>'z')){
			letra=prompt("El dato ingresado no es una letra. Intente de nuevo");
		}
		num=parseInt(prompt("Ingrese un numero: "));
		while(num<-100 || num>100){
			num=parseInt(prompt("El numero ingresado no es valido. Intente de nuevo"));
		}
		if(num%2==0 && num!=0){
			contPares++;
		} else
		{
			if(num!=0)
			{
				contImpares++;
			}
		}
		if(num>0)
		{
			SumaPositivos=SumaPositivos+num;
			contPositivos++;
		} else
		{
			if(num==0)
			{
				contCeros++;
			} else
			{
				SumaNegativos=SumaNegativos+num;
			}
		}
		if(Max<num)
		{
			Max=num;
			LetraMax=letra;
		}
		if(Min>num)
		{
			Min=num;
			LetraMin=letra;
		}
		respuesta=prompt("Quiere ingresar mas datos?");
	} while(respuesta=='si');

	document.write("La cantidad de numeros pares es: " + contPares);
	document.write("<br>La cantidad de numeros impares es: " + contImpares);
	document.write("<br>La cantidad de ceros es: " + contCeros);
	document.write("<br>El promedio de todos los numeros positivos es: " + SumaPositivos/contPositivos);
	document.write("<br>La suma de tods los numeros negativos es: " + SumaNegativos);
	document.write("<br>El numero maximo es: " +Max+ " y la letra de ese numero es: " + LetraMax);
	document.write("<br>El numero minimo es: " +Min+ " y la letra de ese numero es: " + LetraMin);
}
