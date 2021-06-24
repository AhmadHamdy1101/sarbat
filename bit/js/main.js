//humperger menu

const menuIcon = document.querySelector('.menu');
const showMenu = document.querySelector('.menu-list');
const clicklink = document.querySelector('.link');
const clicklink1 = document.querySelector('.link1');
const clicklink2 = document.querySelector('.link2');
const clicklink3 = document.querySelector('.link3');
const clicklink4 = document.querySelector('.link4');
const clicklink5 = document.querySelector('.link5');
const clicklink6 = document.querySelector('.link6');
const exitMenu = document.querySelector('.close-menu');

menuIcon.addEventListener('click',function(){
    showMenu.style.display = 'block';
    exitMenu.style.display = 'block';
    
});
clicklink.addEventListener('click',function () {
    showMenu.style.display = 'none';
    
    
});
clicklink1.addEventListener('click',function () {
    showMenu.style.display = 'none';
    
    
});
clicklink2.addEventListener('click',function () {
    showMenu.style.display = 'none';
    
    
});
clicklink3.addEventListener('click',function () {
    showMenu.style.display = 'none';
    
    
});
clicklink4.addEventListener('click',function () {
    showMenu.style.display = 'none';
    
    
});
clicklink5.addEventListener('click',function () {
    showMenu.style.display = 'none';
    
    
});
clicklink6.addEventListener('click',function () {
    showMenu.style.display = 'none';
    
    
});
exitMenu.addEventListener('click',function(){
    showMenu.style.display = 'none';
    
});



const body = document.querySelector('body');

window.addEventListener('scroll',function () {
   let navbar = document.querySelector('.navbar');
   let windowPosition = window.scrollY > 0 ;
    navbar.classList.toggle('scrolling-active', windowPosition)
})


// skills carousel
$('.slide-coursel').slick({
    dots: true,
    infinite: false,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide:1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
   
});





//scollr
$(function() {  
    $("body").niceScroll({
        cursorcolor:"#d70922",
        cursorborder:"0px",
        cursorborderradius:"0px",
        scrollspeed:80,
        boxzoom:true,
    });
});




