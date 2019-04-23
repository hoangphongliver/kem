// import './assets/styles/animation.css';
// import slide from './views/components/homepage/explore/explore';
import './assets/scripts/infinitescroll.js';
require('normalize.css');
require('slick-carousel');
import './assets/scripts/imagesloaded.js';

require('isotope-layout');
require('masonry-layout');
import Global from './views/components/global/global';
import Header from './views/components/header/header';
import Experiences from './views/components/homepage/experiences/experiences';
import HomeGallery from './views/components/homepage/gallery/gallery';
import SpecialOffers from './views/components/homepage/specialoffers/specialoffers';
import Mapbox from './views/components/homepage/mapbox/mapbox';
import './assets/scripts/jquery.fancybox.min.js';
import olapic from './views/components/gallerypage/olapic-wall/olapicwall';
require('normalize.css');
require('slick-carousel');
import SpecialOffers2 from './views/components/specialoffers/specialoffers/specialoffers';
import AboutUs from './views/components/aboutus/aboutus/aboutus';
import slide from './views/components/homepage/explore/explore';
import './assets/scripts/jquery.fancybox.min.js';


window.WOW = require('wowjs').WOW;
  
$(() => {
  // Code here
  olapic.olapic_menu();
  olapic.olapic_change_text();
  Header.selectHotel();
  Header.selectRoom();
  Header.selectAdult();
  Header.selectChildren();
  Header.selectAge();
  Header.selectTypeCode();
  Header.scrollTopHeader();
  Header.showBooking();
  Header.selectDate();
  Header.showMenu();
  Header.check();
  Header.clickButton();
  Header.selectLanguage();
  AboutUs.Slider_owl2();
  SpecialOffers2.filterOffers();
  SpecialOffers2.activeLiAndFilter();
  SpecialOffers2.loadMore();
  SpecialOffers2.stickyMenu();
  slide.Single_slide();
  slide.Slider_owl();
  slide.Show_button();
  olapic.olapic_fancybox();
  olapic.olapic_fillter();
  olapic.filter_event();

});

$(document).ready(() => {
  Global.lazyLoad();
  Experiences.experiencesCarousel();
  HomeGallery.homeGalleryCarousel();
  HomeGallery.homeGalleryCarouselInfo();
  SpecialOffers.specialOffersCarousel();
  SpecialOffers2.showRegions();
  SpecialOffers2.activeLiAndFilter();
  SpecialOffers2.stickyMenu();
  SpecialOffers2.wowJS();
  SpecialOffers2.filterOffers();
  SpecialOffers2.loadMore();
  AboutUs.Slider_owl2();
  Header.selectHotel();
  Header.selectRoom();
  Header.selectAdult();
  Header.selectChildren();
  Header.selectAge();
  Header.selectTypeCode();
  Header.scrollTopHeader();
  Header.showBooking();
  Header.showMenu();
  Header.check();
  Header.clickButton();
  Header.selectLanguage();
});

$(window).on('resize', () => {
  setTimeout(() => {
    Global.lazyLoad();
  }, 250);
  Header.resetStart();
});

window.onload = () => {
  Header.selectHotel();
  Header.selectRoom();
  Header.selectAdult();
  Header.selectChildren();
  Header.selectAge();
  Header.selectTypeCode();
  Header.scrollTopHeader();
  Header.showBooking();
  Header.showMenu();
  Header.clickButton();
  Header.selectLanguage()
  Header.check();
  Header.selectDate();
  if(document.querySelector('.map') && document.querySelector('.map')==null){
  Mapbox.view();
  }
};
