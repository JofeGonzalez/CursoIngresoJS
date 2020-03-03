/*

c)Se pide la carga de datos de un contenedor  de alimento canino con un máximo de carga de 1000kg, cargar hasta que el cliente quiera o se llene el contenedor.
se pide:
marca
kilos por bolsa
cantidad de bolsa
importe por bolsa

que marca tiene más kilos en el contenedor
que marca tiene más bolsas de alimento en el contenedor
que marca tiene el mayor importe por bolsa de alimento
el importe y la marca de la bolsa de alimento menos pesada.
*/
function mostrar()
{
	var marca;
	var pesoBolsa;
	var cantidadBolsa;
	var precioBolsa;
	var pesoMaximoConteiner=1000;
	var marcaMaximoPesoConteiner;
	var marcaMaximoCantidadBolsaConteiner;
	var marcaMaximoPrecioBolsa;
	var marcaMinimoPrecioBolsa;
	var minimoPesoBolsa;
	var MinimoPrecioPesoBolsa;
	var marcaMinimoPesoBolsa;
	var contador=0;
	var respuesta;
	do
	{
		marca=prompt("Ingrese la marca del producto");
		do
		{
			pesoBolsa=parseInt(prompt("Ingrese el peso en kilos de la bolsa"));	
		}while(pesoBolsa>pesoMaximoConteiner);
		do
		{
			cantidadBolsa=parseInt(prompt("Ingrese la cantidad de bolsas"));
		}while(cantidadBolsa*pesoBolsa>pesoMaximoConteiner);
		precioBolsa=parseInt(prompt("Ingrese el importe por bolsa"));
		if(contador==0 || pesoBolsa*cantidadBolsa>marcaMaximoPesoConteiner)
		{
			marcaMaximoPesoConteiner=marca;
		}
		if(contador==0 || cantidadBolsa>marcaMaximoCantidadBolsaConteiner)
		{
			marcaMaximoCantidadBolsaConteiner=marca;
		}
		if(contador==0 || precioBolsa>marcaMaximoPrecioBolsa)
		{
			marcaMaximoPrecioBolsa=marca;
		}
		if(contador==0 || pesoBolsa<minimoPesoBolsa)
		{
			marcaMinimoPesoBolsa=marca;
			MinimoPrecioPesoBolsa=pesoBolsa;
		}
		respuesta=prompt("Quiere ingresar mas datos?");
	}while(respuesta=='si');
	document.write("La marca que tiene mas kilos en el contenedor es " +marcaMaximoPesoConteiner);
	document.write("<br>La marca que tiene mas bolsas de alimento en el conteiner es " +marcaMaximoCantidadBolsaConteiner);
	document.write("<br>La marca que tiene el mayor importe por bolsa de alimento " +marcaMaximoPrecioBolsa);
	document.write("<br>El importe de la bolsa de alimentos menos pesada es " +MinimoPrecioBolsa+ " y su marca es " +marcaMinimoPesoBolsa);
}
