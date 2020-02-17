/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var cantidadLamparas;
 	var Marca;
 	var PrecioFinal;
 	var PrecioBruto;
 	var Descuento;
 	var PrecioImpuestoBruto;

 	cantidadLamparas=document.getElementById('Cantidad').value;
 	cantidadLamparas=parseInt(cantidadLamparas);
 	Marca=document.getElementById('Marca').value;
 	PrecioBruto=cantidadLamparas*35;
 	console.info("PrecioBruto", PrecioBruto);
 	Descuento=0;
 	if(cantidadLamparas>5)
 	{
 		Descuento=50;
 	} else
 	{
 		if(cantidadLamparas==5)
 		{
 			if(Marca=='ArgentinaLuz')
 				{
 					Descuento=40;
 				} else
 				{
 					Descuento=30;
 				}
 		} else
 		{
 			if(cantidadLamparas==4)
 			{
 				if(Marca=='ArgentinaLuz' || Marca=='“FelipeLamparas”')
 				{
 					Descuento=25;
 				} else
 				{
 					Descuento=20;
 				}
 			} else
 			{
 				if(cantidadLamparas==3)
 				{
 					if(Marca=='ArgentinaLuz')
 					{
 						Descuento=15;
 					} else
 					{
 						if(Marca=='“FelipeLamparas”')
 						{
 							Descuento=10;
 						} else
 						{
 							Descuento=5;
 						}
 					}
 				}
 			}
 		}
 	}
 	PrecioFinal=(PrecioBruto- PrecioBruto*Descuento/100);
 	if(PrecioFinal>119){
 		PrecioImpuestoBruto=PrecioFinal+(PrecioFinal*10/100);
 	}
 	console.info("PrecioFinal", PrecioFinal);
 	console.info("IIBB Usted pago ", PrecioImpuestoBruto);
}
