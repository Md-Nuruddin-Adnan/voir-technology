$(function(){
    //sticky menu
     var menuDis = $(".header").offset().top;
     
     $(window).scroll(function(){
        var scrollValue = $(this).scrollTop();
         
         if(scrollValue >= menuDis){
             $(".header").addClass("position-fixed");
             $(".banner").addClass("bannerMargin");
         }else{
             $(".header").removeClass("position-fixed");
             $(".banner").removeClass("bannerMargin");  
         }
     });
 });


 
  //wow jquery plugins
  $(function(){
    
    new WOW().init();
});


 
//nav small device
$(document).ready(function() {
    $('.header.mobile .navbar-toggler').click(function() {
      $('.header.mobile .sidebar').toggleClass('active');
      $('.header.mobile  span').toggleClass('active');
      $('.header.mobile .navbar-toggler ').toggleClass('toggle');
    })
  });
  
 
  
// Init slick slider + animation
$('.banner-slider').slick({
    autoplay: true,
    autoplaySpeed: 7000,
    speed: 500,
    arrows: true,
    dots: true,
    focusOnSelect: true,
    pauseOnHover:false,
    prevArrow: '<span class="prev-arrow"><i class="fas fa-angle-left"></i></span>',
    nextArrow: '<span class="next-arrow"><i class="fas fa-angle-right"></i></span>',
}).slickAnimation();


//sister logo slide
$('.sis-logo-slide').slick({
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 322,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
    ]
  });


   //team slide
   $('.team-slide').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    arrows: false,
    dots: false,
    responsive: [
       
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        
      ]
     
});


 //testimonial slide
 $('.client-slide').slick({
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  });
 


    


