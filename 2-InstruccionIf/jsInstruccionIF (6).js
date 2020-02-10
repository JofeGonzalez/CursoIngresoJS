function mostrar()
{
//tomo la edad  
var edad;

edad=document.getElementById('edad').value;
if(edad<13){
	alert("la persona es un niño");
 }
if(edad>=13 && edad<=17){
	alert("la persona es un adolescente");
 }
 if(edad>17){
	alert("la persona es un adulto");
 }


}//FIN DE LA FUNCIÓN