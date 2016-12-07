$(document).ready(function() {
	
	$('img').click(function() {
		var t = $(this);
		if (t.hasClass('active')) {
			$('#donate-panel').slideUp();
			t.removeClass('active');
			$('#more-info').text('Learn more');
		} else {
			$('#donate-panel').slideDown();
			t.addClass('active');
			$('#more-info').text('Hide');
		}
	});

	$('#pig').hover(function() {
		$('#pig').css("opacity", "0.5");
		}, function() {
	    	$('#pig').css("opacity", "1");
	});

	$('#food').hover(function() {
		$('#food').css("opacity", "0.5");
		}, function() {
	    	$('#food').css("opacity", "1");
	});

	$('#water').hover(function() {
		$('#water').css("opacity", "0.5");
		}, function() {
	    	$('#water').css("opacity", "1");
	});

	$('#home').hover(function() {
		$('#home').css("opacity", "0.5");
		}, function() {
	    	$('#home').css("opacity", "1");
	});

	$('#edu').hover(function() {
		$('#edu').css("opacity", "0.5");
		}, function() {
	    	$('#edu').css("opacity", "1");
	});



});
