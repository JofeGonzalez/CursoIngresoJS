function mostrar()
{
  var nombre1;
  var nombre2;
  var peso1;
  var peso2;
  var sumaPesos;
  var promedioPesos;
  nombre1=prompt("Ingrese el primer nombre: ");
  peso1=parseInt(prompt("Ingrese el primer peso"));
  nombre2=prompt("Ingrese el segundo nombre: ");
  peso2=parseInt(prompt("Ingrese el segundo peso"));
  sumaPesos=peso1+peso2;
  promedioPesos=sumaPesos/2;
  alert("Ustedes se llaman " +nombre1+ " y " +nombre2+ " pesan " +peso1+ " y " +peso2+ " ,que sumados son " +sumaPesos+ " kilos y el promedio de peso " +promedioPesos);
}
