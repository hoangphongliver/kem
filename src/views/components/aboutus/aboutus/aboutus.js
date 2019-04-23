const AboutUs = {
    Slider_owl2: () => {
      $('.room-slide2').slick({
        centerMode: true,
        centerPadding: '23%',
        slidesToShow: 1,
        asNavFor: '.country_name2',
        responsive: [
            {
              breakpoint: 1025,
              settings: {
                centerPadding: '10%',
                slidesToShow: 1
              }
            },
            {
              breakpoint: 767,
              settings: {
                centerPadding: '0px',
                slidesToShow: 1
              }
            }
          ]
      });
      $('.country_name2').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.room-slide2',
        dots: true,
        speed: 300,
        centerMode: true,
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      });   
    }
    }
  
  export default AboutUs;