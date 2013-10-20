jQuery(document).ready(function() {
	//menu
	jQuery('ul.sf-menu').superfish({
		delay:       700,
		animation:   {opacity:'show',height:'show'},
		speed:       'fast',
		disableHI:   false,
		cssArrows:   true,
		autoArrows:  false
	});

	//toTop
    jQuery(function(){
        jQuery().UItoTop({ easingType: 'easeOutQuart' });
    });

    //horizontal accordion
    jQuery('#horizontal_slider').elastislide({
        imageW : 260,
        border : 0,
        minItems : 1,
        margin : 30
    });

    jQuery("a[rel^='prettyPhoto']").prettyPhoto({
		theme: 'pp_default', /* light_rounded / dark_rounded / light_square / dark_square / facebook / pp_default*/
   	});

	jQuery('.carousel').carousel();
});

jQuery(window).load(function(){
	jQuery("#mainslider > div").flexslider({
		animation: "fade",
		//useCSS: false,
		controlNav: true,   
		//animationLoop: false,
		smoothHeight: true,
		slideshowSpeed:1000000,
		animationSpeed:1000
	});

	jQuery("#bottomslider > div").flexslider({
		animation: "fade",
		//useCSS: false,
		controlNav: true,
		directionNav: false,   
		//animationLoop: false,
		smoothHeight: true,
		slideshowSpeed:1000000,
		animationSpeed:1000
	});

	jQuery(".slides").find("li").each(function(){
		var h = jQuery(this).height();
		var childH = jQuery(this).find(".leftcontent_wrap").actual("height");
		var childRH = jQuery(this).find(".rightcontent_wrap").actual("height");
		var childD = jQuery(this).find(".slide_description").actual("height");
		var padding = (h / 2) - (childH / 2);
		var paddingR = (h / 2) - (childRH / 2);
		var topD = ((h / 2) - ((childD / 2) ));
		jQuery(this).find(".leftcontent_wrap").css("padding-top" , padding);
		jQuery(this).find(".rightcontent_wrap").css("padding-top" , paddingR);
		jQuery(this).find(".slide_description").css("top" , topD);
	});

	jQuery(".flexslider").hover(
		function(){
			jQuery(this).find(".flex-direction-nav a").animate({opacity : 1});
		},
		function(){
			jQuery(this).find(".flex-direction-nav a").animate({opacity : 0});
		}
	);
});
