
const Experiences = {
    experiencesCarousel: () => {
        $(".room-slide").slick({
            centerMode: true,
            centerPadding: '23%',
            slidesToShow: 1,
            arrows: true,
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
    }
  };
  export default Experiences;
  