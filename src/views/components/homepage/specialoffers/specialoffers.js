const SpecialOffers = {
    specialOffersCarousel: () => {
        $(".offers-slide").slick({
            slidesToShow: 3,
            arrows: true,
            infinite: false,
            responsive: [
                {
                  breakpoint: 1300,
                  settings: {
                    slidesToShow: 2
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
  };
  export default SpecialOffers;