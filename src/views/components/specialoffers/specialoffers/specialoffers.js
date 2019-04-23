var $ = require('jquery');
var jQueryBridget = require('jquery-bridget');
var Isotope = require('isotope-layout');

// provide jQuery argument
import imagesLoaded from '../../../../assets/scripts/imagesloaded.js';
imagesLoaded.makeJQueryPlugin( $ );
import infiniteScroll from '../../../../assets/scripts/infinitescroll.js';
infiniteScroll.makeJQueryPlugin( $ );
const SpecialOffers2 = {
    showRegions: () => {
        $('button.region-dropdown-toggle').click(function(event) {
          event.preventDefault();
          $('.region-dropdown-menu').toggleClass('open');
        });
        $('body').click(function(event) {
          $(".region-dropdown-menu").removeClass('open');
        });
        $('button.region-dropdown-toggle,.region-dropdown-menu').click(function(event) {
          event.stopPropagation();
        });;
    },
    
    activeLiAndFilter: () => {
      $('.menu-sticky ul li a').click(function(event) {
        event.preventDefault();
        $(this).parent().siblings().removeClass('active');
        $(this).parent().addClass('active');
        var category = $(this).data('filter');
        if(category == '.all'){
          $('.new-special-offers').isotope({
          filter:'*'
          });
        }
        else{
          $('.new-special-offers').isotope({
            filter:category
          });
        }
      });
    },
    stickyMenu: () => {
      if($('.menu-sticky ul').length){
        var menuposition = $('.menu-sticky ul').offset().top - 50;
        $(window).scroll(function(event) {
          var bodyposition = $('html').scrollTop();
          if(bodyposition >= menuposition){
            $('.menu-sticky').addClass('is-sticky');
          }
          else{
            $('.menu-sticky').removeClass('is-sticky');
          }
        });
      }
    },
    filterOffers: () => {
      jQueryBridget( 'isotope', Isotope, $ );
      $('.new-special-offers').isotope({
        // options
        itemSelector: 'a.new-special-offers-item'
      });
    },
    wowJS: () => {
      new WOW().init();
    },
    loadMore: () => {
      $(window).scroll(function () {
        if($(document).height() - 500 <= $(window).scrollTop() + $(window).height()) {
            $('.imgloading').fadeOut(1000);
            setTimeout(function(){ 
              $('.a-hide').css('display','block'); 
            }, 1000);
            $('.new-special-offers').isotope({
              // options
              itemSelector: 'a.new-special-offers-item'
            });
        }
     });
    }
    
  };
  export default SpecialOffers2;
  