
$(document).ready(function(){
	var skills_position = $('.skills').offset().top;
	var screen_height = $(window).height();
	var activation_offset = 0.5;//determines how far up the the page the element needs to be before triggering the function
	var skills_activation_point = skills_position - (screen_height * activation_offset);
	var max_scroll_height = $('body').height() - screen_height - 5;//-5 for a little bit of buffer
	var aboutMe_position = $('#aboutMe').offset().top;
	var portfolio_position = $('#portfolio').offset().top;
	//Does something when user scrolls to it OR
	//Does it when user has reached the bottom of the page and hasn't triggered the function yet
	$(window).on('scroll', function() {
	    var y_scroll_pos = window.pageYOffset;

	    var skills_in_view = y_scroll_pos > skills_activation_point;
	    var skills_has_reached_bottom_of_page = max_scroll_height <= y_scroll_pos && !skills_in_view;
	    var aboutMe_in_view = y_scroll_pos >= aboutMe_position && y_scroll_pos < portfolio_position;
	    var portfolio_in_view = y_scroll_pos >= portfolio_position;
	    if(skills_in_view || skills_has_reached_bottom_of_page) {
	        $('.skills').addClass('skills-show');
	    }

	    if(aboutMe_in_view)
	    {
	    	$(".navbar a").addClass("dark");
	    	$("#aboutMe-link").removeClass("dark");
	    	$("#aboutMe-link").addClass("nav-active");
	    } else {
	    	if($("#aboutMe-link").hasClass("nav-active"))
	    	{
	    		$("#aboutMe-link").removeClass("nav-active");
	    	}
	    	if($("#portfolio-link").hasClass("dark"))
	    	{
	    		$("#portfolio-link").removeClass("dark")
	    	}
	    }

	    if(portfolio_in_view)
	    {
	    	$("#portfolio-link").addClass("nav-active");
	    } else {
	    	if($("#portfolio-link").hasClass("nav-active"))
	    	{
	    		$("#portfolio-link").removeClass("nav-active");
	    	}
	    }
	});	
})
