$(document).ready(function() {
  
  $('#whoAmI, #whoAmIText').hover(function() {
	
    $("#whoAmI").stop(true, false).fadeTo("slow", 1);
    $('#whoAmIText').stop(true, false).fadeTo("slow", 1);
	
	}, function() {
	
    $('#whoAmI').stop(true, false).fadeTo("normal", 0.40);
	$('#whoAmIText').stop(true, false).fadeTo("normal", 0.40);
    
  });

  
  $('img#whoAmI').click(function() {
    
    $('div#mysteryPanel').toggle(300);
    
    return false;
    
  });
  
  
  $('div h3').click(function() {
    $('img#silhouette').fadeOut(5000);
    $('img#revealed').delay(3000).fadeIn(1000, function() {
      $('div h3').text("Marechal Patrice MacMahon").css('cursor', 'default');
    });
    
  });
  
});