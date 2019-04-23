require('select2');
require('moment');
import Pikaday from 'pikaday';
const Header = {
  selectLanguage: () => {
    document.querySelector('.top-panel .dropdown-toggle').addEventListener('click', function(){
      this.nextElementSibling.classList.toggle('show-up');
    })
  },
  selectHotel: () => {
    let data = [
      {
        "id": "Where would you like to go?",
        "text": "Where would you like to go?"
      },
      { 
        "text": "Austrla", 
        "children" : [
          {
              "id": "Austria - Vienna - Palais Hansen Kempinski Vienna",
              "text": "Austria - Vienna - Palais Hansen Kempinski Vienna"
          },
          {
              "id": "Austria - Jochberg - Kitzbühel - Kempinski Hotel Das Tirol Jochberg",
              "text": "Austria - Jochberg - Kitzbühel - Kempinski Hotel Das Tirol Jochberg"
          }
        ]
      },
      { 
        "text": "Bulgarla", 
        "children" : [
          {
              "id": "Bulgaria - Bansko - Kempinski Hotel Grand Arena Bansko",
              "text": "Bulgaria - Bansko - Kempinski Hotel Grand Arena Bansko"
          }
        ]
      },
      { 
        "text": "China", 
        "children" : [
          {
              "id": "Beijing - Kempinski Hotel Beijing Lufthansa Center",
              "text": "Beijing - Kempinski Hotel Beijing Lufthansa Center"
          },
          {
            "id": 'Beijing - Sunrise Kempinski Hotel Beijing',
            "text": "Beijing - Sunrise Kempinski Hotel Beijing"
          },
          {
            "id": "Beijing Yanqi Lake - Yanqi Lake Boutique Hotels",
            "text": "Beijing Yanqi Lake - Yanqi Lake Boutique Hotels"
          },
        ]
      }
    ];
    $('.form-search-hotel').select2({
      data: data,
    }).data('select2').$dropdown.addClass('my-container-hotel');
  },
  selectRoom: () => {
    let data = [
      {
        "id": "1Room",
        "text": "1 Room"
      },
      {
          "id": "2Room",
          "text": "2 Rooms"
      },
      {
        "id": "3Room",
        "text": "3 Rooms"
      },
      {
        "id": "4Room",
        "text": "4 Rooms"
      }
    ]
    $('.numberOfRoom').select2({
      data: data,
      minimumResultsForSearch: Infinity,
      dropdownAutoWidth: true,
    }).data('select2').$dropdown.addClass('my-container');
  },
  selectAdult: () => {
    let data = [
      {
        "id": "1Adult",
        "text": "1Adult Per Room"
      },
      {
          "id": "2Adult",
          "text": "2 Adults Per Room"
      },
      {
        "id": "3Adult",
        "text": "3 Adults Per Room"
      },
      {
        "id": "4Adult",
        "text": "4 Adults Per Rooms"
      },
    ]
    $('.numberOfAdult').select2({
      data: data,
      minimumResultsForSearch: -1,
      dropdownAutoWidth: true,
    }).data('select2').$dropdown.addClass('my-container');
  },
  selectAge: () => {
    let data = [
      {
        "id": "0",
        "text": "0"
      },
      {
        "id": "1",
        "text": "1"
      },
      {
        "id": "2",
        "text": "2"
      },
      {
        "id": "3",
        "text": "3"
      },
      {
        "id": "4",
        "text": "4"
      },
      {
        "id": "5",
        "text": "5"
      },
      {
        "id": "6",
        "text": "6"
      },
      {
        "id": "7",
        "text": "7"
      },
      {
        "id": "8",
        "text": "8"
      },
      {
        "id": "9",
        "text": "9"
      },
      {
        "id": "10",
        "text": "10"
      },
      {
        "id": "11",
        "text": "11"
      },
      {
        "id": "12",
        "text": "12"
      },
    ]
    if($('.ageChildren').length != 0){
      $('.ageChildren').select2({
        data: data,
        minimumResultsForSearch: Infinity,
        dropdownAutoWidth: true,
      }).data('select2').$dropdown.addClass('my-container');
    }
    else{
        $('.ageChildren').select2({
          data: data,
          minimumResultsForSearch: Infinity,
          dropdownAutoWidth: true,
        });
    }
  },

  selectChildren: () => {
    let data = [
      {
        "id": "0",
        "text": "0 Childrens Per Room"
      },
      {
        "id": "1Children",
        "text": "1 Childrens Per Room"
      },
      {
          "id": "2Children",
          "text": "2 Childrens Per Room"
      },
      {
        "id": "3Children",
        "text": "3 Childrens Per Room"
      },
      {
        "id": "4Children",
        "text": "4 Childrens Per Rooms"
      },
    ]
    $('.numberOfChild').select2({
      data: data,
      minimumResultsForSearch: Infinity,
      dropdownAutoWidth: true,
    }).data('select2').$dropdown.addClass('my-container');

    $('.numberOfChild').on("change", function (e) {
      let select_val = $(e.currentTarget).val();
      let elems = '';
      var viewSelect = (n) => {
        for (let i = 0; i < n; i++) { 
          let elem = '<div class=\"form-group children-select\">'+
          '<select class=\"ageChildren\"' + " " + 'name=\"ChildrenAge['+i+']\">'+
          '</select>'+
          '</div>';
           elems += elem;
        }
        $('.block-list-children').html(elems);
      }
      if(select_val == 0)
      {
        $('.row-select-children .title').removeClass('d-block');
        $('.block-list-children').empty()
      }
      if(select_val != 0){
        $('.row-select-children .title').addClass('d-block');
        let length = $('.block-list-children').length;
       
        if(select_val == '1Children')
        {
          if(length == 1)
          {
            viewSelect(1);
            Header.selectAge();
          }
        }
        if(select_val == '2Children')
        {
            viewSelect(2);
            Header.selectAge();
        }
        if(select_val == '3Children')
        {
            viewSelect(3);
            Header.selectAge();
        }
        if(select_val == '4Children')
        {
            viewSelect(4);
            Header.selectAge();
        }
      }
    });
  },
  selectTypeCode: () => {
    let data = [
      {
        "id": "",
        "text": "Type Of Code"
      },
      {
          "id": "Corporate ID",
          "text": "Corporate ID"
      },
      {
        "id": "IATA",
        "text": "IATA"
      },
      {
        "id": "Group Code",
        "text": "Group Code"
      },
    ]
    $('#CodeType').select2({
      data: data,
      minimumResultsForSearch: Infinity,
      dropdownAutoWidth: true,
    }).data('select2').$dropdown.addClass('my-container');
  },

  selectDate: () => {
    var field = document.getElementById('check-in');
    var picker = new Pikaday({
      field: field,
      numberOfMonths: 2,
      reposition: false,
      minDate: new Date(),
      format: 'll',
      onOpen: function(){
        this.el.style.position = 'absolute'; // reset
        this.el.style.left = '0';
        this.el.style.top = '45px';
        document.querySelector('.booking-block').style.overflow = 'visible';
      },
      onClose: function(){
        this.el.style.position = 'absolute'; // reset
        this.el.style.left = '0';
        this.el.style.top = '45px';
        document.querySelector('.booking-block').style.overflow = '';
      },
      onSelect: function() {
        var checkIn = this.getMoment().format('ll');
    }
    });
    var a = field.parentNode;
    a.parentNode.insertBefore(picker.el, a.nextSibling);
    var picker2 = new Pikaday({
      field: document.getElementById('check-out'),
      numberOfMonths: 2,
      reposition: false,
      minDate: new Date(),
      format: 'll',
      onOpen: function(){
        this.el.style.position = 'absolute'; // reset
        this.el.style.left = '0';
        this.el.style.top = '45px';
        document.querySelector('.booking-block').style.overflow = 'visible';
      },
      onClose: function(){
        this.el.style.position = 'absolute'; // reset
        this.el.style.left = '0';
        this.el.style.top = '45px';
        document.querySelector('.booking-block').style.overflow = '';
      },
      onSelect: function() {
        console.log(this.getMoment().format('ll'));
    }
    });
    var b = document.getElementById('check-out').parentNode;
    b.parentNode.insertBefore(picker2.el, b.nextSibling);
  },
  showBooking: () => {
    document.addEventListener('click', function(evt){
      var inside = document.querySelector('.booking-block');
      if(event.target.closest(".booking-block")){
        inside.classList.add('show-up');
        document.querySelector('.block-option').classList.add('show-up');
        document.querySelector('.row-select').style.opacity = "1";
        document.querySelector('.row-select').style.visibility = "visible";
        return true;
      }
      document.querySelector('.booking-block').classList.remove('show-up');
      document.querySelector('.row-select').style.opacity = "0";
      document.querySelector('.row-select').style.visibility = "hidden";
      document.querySelector('.block-option').classList.remove('show-up');
    })
  },
  showMenu: () => {
    document.querySelector('.sticky-bar-mobile').addEventListener('click', function(){
        this.classList.toggle('is-showing');
        document.querySelector('.menu-left').classList.toggle('is-active');
    })
  },
  scrollTopHeader: () => {
    const offsetTop = document.querySelector('.booking-block').offsetTop - 20;
    if(offsetTop <= 0){
          document.querySelector('.booking-block').classList.remove('fixed');
          document.querySelector('.menu-left').classList.remove('fixed');
          document.querySelector('.sticky-bar-mobile').classList.remove('show-up');
    }
    else{
      window.addEventListener("scroll", function(){
        if(window.scrollY >= offsetTop){
          document.querySelector('.booking-block').classList.add('fixed');
          document.querySelector('.menu-left').classList.add('fixed');
          document.querySelector('.sticky-bar-mobile').classList.add('show-up');
        }
        else{
          document.querySelector('.booking-block').classList.remove('fixed');
          document.querySelector('.menu-left').classList.remove('fixed');
          document.querySelector('.sticky-bar-mobile').classList.remove('show-up');
        }
        
        if(document.querySelector('.booking-block').offsetTop == 0){
          document.querySelector('.booking-block').classList.remove('show-up');
          document.querySelector('.booking-block').style.overflow = "";
        }
        $('#CodeType').select2('close')
        $('.numberOfChild').select2('close')
        $('.numberOfAdult').select2('close')
        $('.numberOfRoom').select2('close')
        $('.ageChildren ').select2('close')
    })
    }
    var scrollTo = document.querySelectorAll('.content.overlay .text')
    scrollTo.forEach(function (elem) {
      elem.addEventListener('click', function(){
        var id = this.dataset.target;
        var y = document.getElementById(id).offsetTop - 100;
        $("html, body").animate({ scrollTop: y }, 100);
      })
    });
  },
  resetStart: () => {
    const offsetTopresize = document.querySelector('.booking-block').offsetTop;
    if(offsetTopresize == 0){
      document.querySelector('.booking-block').classList.remove('fixed');
      Header.scrollTopHeader();
    }
    else{
      Header.scrollTopHeader();
    }
  },
  clickButton: () => {
    let elem = document.querySelectorAll('.btn-search');
    elem.forEach(function (elem){
      elem.addEventListener('click', function(){
        let formSearchHotel  = document.querySelector('.form-search-hotel').value;
        let checkIn = document.getElementById('check-in').value;
        let checkOut = document.getElementById('check-out').value;
        if(formSearchHotel == 'Where would you like to go?' || formSearchHotel == ''){
          document.querySelector('.block-location .error-msg').style.display = 'block';
        }
        if(checkIn == '' || checkOut ==''){
          document.querySelector('.block-picker .error-msg').style.display = 'block';
        }
      })
    });

    document.querySelector('.show-sm-booking-block .container').addEventListener('click',function(){
      document.querySelector('.booking-block').classList.add('active');
      document.querySelector('.booking-block').style.overflow = 'visible';
      document.querySelector('.sticky-bar-mobile').style.display = "none";
    });
    document.querySelector('.title-block-booking .icon-close').addEventListener('click',function(){
      document.querySelector('.booking-block').classList.remove('active');
      document.querySelector('.sticky-bar-mobile').style.display = "";
      document.querySelector('.booking-block').style.overflow = 'hidden';
    })
    document.querySelector('.top-header .loginLink').addEventListener('click', function(){
        document.querySelector('.account-widget-desktop').classList.toggle('show-up');
    })
    let viewSubMenu = document.querySelectorAll('.side-list-lv-1 .icon-angle-down');

    viewSubMenu.forEach(function (elem) {
      elem.addEventListener('click',function(){
        this.parentElement.querySelector('.sub-menu').classList.toggle('d-block');
        document.querySelector('.menu-left').classList.toggle('big-width');
      })  
    });

    document.querySelector('.navigation-only-phone .dropdown').addEventListener('click', function(){
      document.querySelector('.navigation-only-phone .dropdown-menu-block').classList.toggle('d-block');
      console.log('ok')
    });
  },
  check: () => {
    setInterval(function(){
      if(document.querySelector('.form-search-hotel').value != 'Where would you like to go?' ){
          document.querySelector('.block-location .error-msg').style.display = 'none';
      }
      if(document.getElementById('check-in').value != '' && document.getElementById('check-out').value != '' ){
        document.querySelector('.block-picker .error-msg').style.display = 'none';
      }
  }, 3000);
 
  }
};

export default Header;
