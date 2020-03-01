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
		alert(num1+num2);
	} else
	{
		num1=parseInt(num1);
		num2=parseInt(num2);
		if(num1>num2)
		{
			resta=num1-num2;
			if(resta>10){
				alert("la resta es " +resta+ " y superó el 10");
			}
		} else
		{
			suma=num1+num2;
			alert(suma);
		}
	}
}
