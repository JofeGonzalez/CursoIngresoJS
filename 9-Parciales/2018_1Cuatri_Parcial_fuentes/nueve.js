function mostrar()
{
	var marca;
	var peso;
	var temperatura;
	var cantTempPares=0;
	var SumaPeso=0;
	var MarcaPesoMax;
	var cantProductosMenosCero=0;
	var cantProductos=0;
	var PesoMax;
	var PesoMin;
	var contador=0;
	var respuesta;

	do
	{
		marca=prompt("Ingrese la marca del producto");
		do
		{
			peso=parseInt(prompt("Ingrese el peso del producto"));
		}while(peso<1 || peso>100);
		do
		{
			temperatura=parseInt(prompt("Ingrese la temperatura de almacenamiento del producto"));
		}while(temperatura<-30 || temperatura>30);
		cantProductos++;
		SumaPeso=SumaPeso+peso;
		if(temperatura%2==0 && temperatura!=0)
		{
			cantTempPares++;
		}
		if(contador==0 || peso<PesoMax)
		{
			PesoMax=peso;
			MarcaPesoMax=marca;
		}
		if(temperatura<0)
		{
			cantProductosMenosCero++;
		}
		if(contador==0 || peso>PesoMin)
		{
			PesoMin=peso;
		}
		respuesta=prompt("Quiere ingresar otro dato?");
	}while(respuesta=='s');
	document.write("La cantidad de temperaturas pares es :" +cantTempPares);
	document.write("<br>La marca del producto más pesado es: " +MarcaPesoMax);
	document.write("<br>La cantidad de productos que se conservan a menos de 0 grados es: " +cantProductosMenosCero);
	document.write("<br>El peso  maximo es: " +PesoMax+ " y el peso minimo es: " +PesoMin);

}
