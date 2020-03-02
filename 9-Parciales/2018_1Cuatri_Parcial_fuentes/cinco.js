function mostrar()
{
	var planeta;
	planeta=prompt("Ingrese un planeta del sistema solar");	
	switch(planeta)
	{
		case 'tierra':
			alert("acá vivimos");
			break;
		case 'mercurio':
		case 'venus':
			alert("acá hace mas calor");
			break;
		case 'marte':
		case 'jupiter':
		case 'saturno':
		case 'urano':
		case 'neptuno':
			alert("acá hcae más frío");
			break;
		default:
			alert("este no es un planeta valido");
			break;	

	}
}
