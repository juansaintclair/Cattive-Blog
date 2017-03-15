/**
 * @package     Cattive.Site
 * @subpackage  Templates.cattive
 *
 * @copyright   Copyright (C) 2015, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */

/* global  $, Pace */

$(function () {



	//Smooth Scroll
	$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
      }
    });
   
  
    
    $travaClickMobile = 0;
    //Mobile no Clique para abrir o pesquisar
    $('.search-btn-trigger-mobile').click(function() {
        $searchMobile = $('.effect-search-mobile');
        if ($travaClickMobile == 0) {
            $searchMobile.removeClass('border-search-white');
            $searchMobile.css('width','110px');
            $searchMobile.addClass('search-mobile-effect');
            $travaClickMobile = 1;
            console.log('click');
         }
         else {
            $searchMobile.removeClass('search-mobile-effect');
            $searchMobile.css('width','0');
            $searchMobile.addClass('border-search-white');
            $travaClickMobile = 0;
         }
    });
    
});

