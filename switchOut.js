
$(function() {
	$('#consumerApp').click(function(){	
		$('body').removeClass('dark');		
		$('body').addClass('light');
		$(this).addClass('active');
		$('#enterpriseApp').removeClass('active');
	});	
	
	$('#enterpriseApp').click(function(){		
		$('body').removeClass('light').addClass('dark');
		$(this).addClass('active');
		$('#consumerApp').removeClass('active');
	});
})	