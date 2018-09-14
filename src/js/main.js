

$(document).ready(function(){
    var link = $('.menu-link');
    var link_active = $('.menu-link_active');
    var menu = $('.nav');
    var nav_link = $('.menu a');


    link.click(function() {
        link.toggleClass('menu-link_active');
        menu.toggleClass('menu_active');
        menu.toggleClass('hidden-mobile');
    });
    nav_link.click(function() {
        link.toggleClass('menu-link_active')
        menu.toggleClass('menu_active');
        menu.toggleClass('hidden-mobile');
    });
				
	$('.slider').slick({
		dots: true
	});
});