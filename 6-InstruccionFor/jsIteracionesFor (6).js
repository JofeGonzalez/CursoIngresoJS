function mostrar()
{
	var i;
	var num;
	var cont=0;
	num=prompt("ingrese un numero");
	num=parseInt(num);
	for(i=1; i<=num; i++)
	{
		if(i%2==0)
		{
			cont++;
		}
	}
	alert("La cantidad de numeros divisores encontrados es: " + cont);

}//FIN DE LA FUNCIÓN