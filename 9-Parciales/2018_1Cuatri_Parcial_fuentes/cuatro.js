function mostrar()
{
	var num1;
	var num2;
	var suma;
	var resta;

	num1=prompt("Ingrese el primer numero");
	num2=prompt("Ingrese el segundo numero");

	if(num1==num2)
	{
		alert("La concatenacion de los numeros es: "+num1+num2);
	} else
	{
		num1=parseInt(num1);
		num2=parseInt(num2);
		if(num1>num2)
		{
			resta=num1-num2;
			alert("La resta de los numeros es: "+resta);
		} else
		{
			suma=num1+num2;
			if(suma>10);
				alert("La suma es: " +suma+ " y supero el 10");
		}
	}
}
