jQuery(document).ready(function($){
  jQuery(".level0.parent > a").removeAttr("href");
	jQuery('#search_mini_form .search .label').after().click(function(){
		jQuery('.custom-group-search').removeClass('active');
	});

	 jQuery(window).scroll(function(){
      if (jQuery(window).scrollTop() >= 1) {
        jQuery('.page-header').addClass('sticky');
       }
       else {
        jQuery('.page-header').removeClass('sticky');
         }
      });  

    require([
        'jquery',
        'tabs'], function ($) {
        $("#faq-list, #blind_feature_list, #delivery_qus, #blinds_install").accordion();
        
    });
    
    
    jQuery('.review_form_toggle').click(function(){
        jQuery(this).children('h4').toggleClass('active');
        jQuery('.review_form_content').slideToggle();
    });

    var all_blind = '<a href="#" class="btn btn-effect invert">SHOP</a>';
    jQuery(".nav-2-1-5").append(all_blind);
     var all_tracks = '<a href="#" class="btn btn-effect invert">SHOP</a>';
    jQuery(".nav-2-2-5").append(all_tracks);


    // mobile width

      if (jQuery(window).width() < 767) {
           require([
              'jquery',
              'tabs'], function($) {
              jQuery("#collapse-footer").accordion();
          });
      } 
      if (jQuery(window).width() < 959) {

        
        var shopblinds = jQuery('.leftstatic');
        var shoptracks = jQuery('.rightstatic');
        shopblinds.insertBefore('.nav-2-1 a');
        shoptracks.insertBefore('.nav-2-2 a');
          jQuery('.level1.submenu').remove();
        //   jQuery('.nav-toggle').click(function(){
      
        // });

        jQuery('.level0.parent').prepend('<p class="goBack"><i></i> </p>');
        jQuery('#dm li.parent > a').click(function(){
          jQuery(this).parent('.parent').addClass('subviewopen');
           jQuery(this).parents('#dm').addClass('subview');
        });
        jQuery('#dm .goBack').click(function(){
          jQuery(this).parent('.parent').removeClass('subviewopen');
           jQuery(this).parents('#dm').removeClass('subview');
        })

        jQuery('.custom-group-search').insertAfter('.navigation .level-top.level0.last');
        jQuery('.custom-group-search').insertAfter('.show-on-mobile li:last-child');

      } 

    // move element with js

      var roller = jQuery('#roller-list .block-title');
       var blackout = jQuery('#backout-list .block-title');
      roller.insertBefore('#roller-list .product-items .product-item:first-child');
      roller.addClass('product-item');
      blackout.insertBefore('#backout-list .product-items .product-item:first-child');
      blackout.addClass('product-item');

      var rollerview = jQuery('#roller-list .shop-all-link');
       var blackoutview = jQuery('#backout-list .shop-all-link');
      rollerview.insertAfter('#roller-list .product-items .product-item:last-child');
      blackoutview.insertAfter('#backout-list .product-items .product-item:last-child');

 
     
});

 jQuery(window).load(function($){
   

    jQuery('#blinds_mobileCategories .toggle__categories span').click(function(){
      jQuery('#blinds_mobileCategories .toggle__categories span').toggleClass('active');
      jQuery('#blinds_mobileCategories .toggle__categoriesContent').slideToggle();
    });
    jQuery('#tracks_mobileCategories .toggle__categories span').click(function(){
      jQuery('#tracks_mobileCategories .toggle__categories span').toggleClass('active');
      jQuery('#tracks_mobileCategories .toggle__categoriesContent').slideToggle();
   });
    
 
     if (jQuery(window).width() <= 959) {
      jQuery('.level1.submenu').remove();
      jQuery(".menu-dropdown-icon > a").removeAttr("href");


      
        jQuery('#om li.menu-dropdown-icon > a').click(function(){

          jQuery(this).parent('.menu-dropdown-icon').addClass('subviewopen');
           jQuery(this).parents('#om').addClass('subview');
           jQuery('.subviewopen').prepend('<p class="goBack"><i></i> </p>');
        });

         jQuery(' #om .goBack').click(function(e){
      alert('clicked');
        jQuery(this).parent('.menu-dropdown-icon').removeClass('subviewopen');
         jQuery(this).parents('#om').removeClass('subview');
         e.preventDefault();
    });

       
    }

  });
