function mostrar()
{
	var i;
	var num;
	var cont=0;
	num=prompt("ingrese un numero");
	num=parseInt(num);
	for(i=1; i<=num; i++)
	{
		if(num%i==0)
		{
			cont++;
		}
	}
	if(cont==2){
	alert("El numero es Primo");	
	}
	else
	{
		alert("El numero no es primo");
	}
}