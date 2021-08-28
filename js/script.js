 $(document).ready(function (){
	
    //slidetoggle
	$('.abc').click(function (){
	  $('.abd').slideToggle();
	})
    //toggle
    $('#btn9').click(function(){
      $('h2').toggle(100);
    })
   //dragable
   $( function() {
    $( "#draggable" ).draggable();
  } );
   //accordion
   $( function() {
    $( "#accordion" ).accordion({
      heightStyle: "content"
    });
  } );
    //dialog  
    $( function() {
    $( "#dialog" ).dialog();
  } );
  


 })