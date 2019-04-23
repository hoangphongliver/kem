
var $ = require('jquery');
var jQueryBridget = require('jquery-bridget');
var Isotope = require('isotope-layout');
const olapic = {
    olapic_menu: () => {
        if($('.viewall').length){
            var viewall = document.querySelector('.viewall');
            var a = document.querySelector('.viewall a');
            var ul = document.querySelector('.olapic-desktop');
            var li = document.querySelectorAll('.olapic-mobile li');
            viewall.onclick = () =>{
                if( ul.style.display == 'none'){
                    ul.style.display = 'block';
                } else{
                    ul.style.display = 'none';
                }
                a.setAttribute('class','change_color');
            }
        }
    },
    olapic_change_text: () =>{
        var the_a = document.querySelectorAll('.olapic-desktop a');
        var a_change = document.querySelector('.viewall a');
        var li_desktop = document.querySelectorAll('.olapic-desktop li');
        var ul2 = document.querySelector('.olapic-desktop');   
        for(let i=0 ; i<li_desktop.length ; i++){
            li_desktop[i].onclick = ()=>{
                var active = document.getElementsByClassName("active");
                active[0].className = active[0].className.replace("active","");
                li_desktop[i].classList.add('active');
                var current = document.getElementsByClassName("active1");
                current[0].className = current[0].className.replace("active1", "");
                li_desktop[i].classList.add('active1');
                a_change.innerHTML = the_a[i].text;
                ul2.style.display = 'none';
            }
        }
    },
    olapic_fancybox: ()=>{
        $('.gallery-fancybox').fancybox({
            loop:true
        });
    },
    olapic_fillter: ()=>{
        jQueryBridget( 'isotope', Isotope, $ );
        $('.image-gallery').isotope({
          // options
          itemSelector: '.gallery_item'
        });
    },
    filter_event: ()=>{
        $('.olapic-desktop li').click(function(event) {
            event.preventDefault();
            var category = $(this).data('filter');
            if(category == '.viewall'){
              $('.image-gallery').isotope({
              filter:'*'
              });
            }
            else{
              $('.image-gallery').isotope({
                filter:category
              });
            }
          });
    }
}
export default olapic;