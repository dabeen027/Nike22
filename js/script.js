$(document).ready(function(){
    $('.slider').slick({
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      prevArrow: "<i class='prev-arrow fas fa-arrow-circle-left'></i>",
      nextArrow: "<i class='next-arrow fas fa-arrow-circle-right'></i>",
    });

    
    $('.shoes-img').slick({
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      prevArrow: "<i class='prev-arrow fas fa-arrow-circle-left'></i>",
      nextArrow: "<i class='next-arrow fas fa-arrow-circle-right'></i>",
    });

    $(".up-btn").click(function(){
      $("body,html").animate({scrollTop : 0},500)
    });
  });



// $(function(){

//   $(window).scroll(function(){

//     if($(this).scrollTop() >=500){
//       $('up-btn').fadeIn();
//     }else{
//       $('up-btn').fadeOut();
//     }

//   });

//   $('up-btn').click(function(e){
//     e.preventDefault();
//     $('html, body').stop().animate({scrollTop:0},500);
//   });

// });
  
var lastScroll = 0;
$(window).scroll(function(event){
    //Sets the current scroll position
    var st = $(this).scrollTop();
    //Determines up-or-down scrolling
    if (st > lastScroll){
        //Replace this with your function call for downward-scrolling
        $(".up-btn").css({"opacity" : 0 , "visibility" : "hidden"});
    }
    else {
        //Replace this with your function call for upward-scrolling
        $(".up-btn").css({"opacity" : 1 , "visibility" : "visible"});
    };
    //Updates scroll position
    lastScroll = st;

    if( st < 300 ){
      $(".up-btn").css({"opacity" : 0 , "visibility" : "hidden"});
    }
});
