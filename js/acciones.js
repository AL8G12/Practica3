//JavaScript
	
$(document).ready(function(e){
	var TuNombre;
	var TuDia, TuMes, TuAnio;
	 var diasfaltantes;
	var edad;
	var lim;
$('#continuarfecha').click(function(e){
	
	TuNombre= $('#nombre').val();

});//click continuarfecha
$('#ContinuarResultado').click(function(e){
	TuDia= $('#Dia').val();
    TuMes=$('#Mes').val();
	TuAnio=$('#Anio').val();
	
	$('#Quien').text(TuNombre);
	var fecha=new Date();
	//alert (fecha);
	//var fecha1=new Date('2014/06/29');
	//alert(fecha1)
	//alert(((fecha-fecha1)/1000/60/60/24));
	
	//alert(fecha.getFullYear());
	//alert(fecha.getMonth());
	//alert (fecha.getDate());
	
	//alert(TuDia);
	//alert(TuMes);
	//alert(TuAnio);
	//alert('hola');
	$('#limpiar').click(function(e){
	$('#nombre').val('')
    $('#Dia').val('');
	$('#Mes').val('');
	$('#Anio').val('');
	});
	
	var fechaactual=new Date(fecha.getFullYear()+'/'+(fecha.getMonth()+1)+'/'+ fecha.getDate());
	//alert(fechaactual);
	var mifecha=new Date (fecha.getFullYear()+'/'+ TuMes+'/'+ TuDia);
	//alert(mifecha);
	edad=(fecha.getFullYear())-TuAnio;
	//alert('edad '+edad);
    if (mifecha.getMonth()>=fechaactual.getMonth())
	{
	   if (mifecha.getMonth()==fechaactual.getMonth())
	   {
	      if (mifecha.getDate()<=fechaactual.getDate())
		  {
			 mifecha=new Date ((mifecha.getFullYear()+1)+'/'+(mifecha.getMonth()+1)+'/'+mifecha.getDate() );
		    diasfaltantes=Math.ceil((mifecha-fechaactual)/1000/60/60/24);

		  }
	      else
		  { 
		    diasfaltantes=Math.ceil((mifecha-fechaactual)/1000/60/60/24);
			edad=edad-1;
		  }
	   }
	   else 
	   {
		    diasfaltantes=Math.ceil((mifecha-fechaactual)/1000/60/60/24);
         edad=edad-1;
	   }
	}
	else 
{
	mifecha=new Date ((mifecha.getFullYear()+1)+'/'+(mifecha.getMonth()+1)+'/'+mifecha.getDate() );
	//alert('nueva fecha '+mifecha);
		    diasfaltantes=Math.ceil((mifecha-fechaactual)/1000/60/60/24);
	}
	$('#tiene').text('Tienes ' + edad +' años');
	//alert(edad);
	$('#faltan').text('Faltan ' + diasfaltantes + ' dias para tu cumpleaños');
		//alert(diasfaltantes);
	if (diasfaltantes<=30)
	{
        $('#mensaje').show();
		}
		else
		{
			$('#mensaje').hide();
		}
		
		
});//click continuarfecha



});//ready