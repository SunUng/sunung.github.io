$(function() {
  //헤더 인클루드
  var path = $('body').attr('data-page-path');
  $('.header_original').load('./include/header.html', function(e) {
    $('.path').text(path);
    $('li[data-menu-path="'+path+'"]').addClass('on');
    var source = $(this).children().clone();
    $('.header_clone, .navigation_area').append(source);
  });
  //메뉴 클릭 동작
  $(document).on('click', '.gnb_list a', function(event){
    var thisPath = $(this).parents('li').attr('data-menu-path');
    if (thisPath === path) {
      event.preventDefault();
      var scroll = $(window).scrollTop();
      var cover = $('.intro').height()-80;
      if (scroll >= cover) {
        $("html, body").clearQueue().animate({scrollTop:0}, 700, 'easeInOutCirc');
      }
    }
  });
});

$(function() {
    //스티커 메뉴 출력
    $(window).scroll(function(){
        var coverMoveAmount = $('.intro').height() - $('.sticky_header').height();
        var scroll = $(window).scrollTop();
        if (scroll >= coverMoveAmount) {
            $('.intro').addClass('take-off');
        } else {
            $('.intro').removeClass('take-off');
        }
    });
});

//스크롤 액션 이펙트 (페이지리로드시)
$(document).ready(function(){
   var scroll = $(window).scrollTop();
   var bottom = scroll + $(window).height();
   var anchor = bottom - 50;
   $('.action').each(function(){
      var offset = $(this).offset().top;
      if (anchor >= offset) {
         $(this).addClass('on');
      } else {
         $(this).removeClass('on')
      }
   });
});
//스크롤 액션 이펙트 (스크롤시)
$(window).scroll(function(){
   var scroll = $(window).scrollTop();
   var bottom = scroll + $(window).height();
   var anchor = bottom - 50;
   $('.action').each(function(){
      var offset = $(this).offset().top;
      if (anchor >= offset) {
         $(this).addClass('on');
      } else {
         $(this).removeClass('on')
      }
   });
});

//페이지 로드시 커버 이미지 삽입
$(function() {
  var cond = $('.intro').attr('data-cover-action');
  if (cond !== 'off') {
    var img = $('.img_cover').length > 0;
    if (img === true) {
      var origin = $('.img_cover').attr('src');
      $('<img/>').attr('src', origin).load(function() {
        var src = $(this).attr('src');
        var source = 'url(' + src + ')';
        $('.intro_cover').css('background-image', source);
        $('.intro').addClass('loaded');
        $('.slogan').find('p').addClass('loaded');
      });
    } else {
      $('.intro').addClass('loaded');
      $('.slogan').find('p').addClass('loaded');
    }
  }
});

$(document).on('click','.gnb_switch', function(){
  $('body').toggleClass('menu-on');
});
$('.backside_closer').click(function(){
  $('body').removeClass('menu-on');
});

// $('.btn_gotop').click(function(){
//   $("html, body").clearQueue().animate({scrollTop:0}, 700, 'easeInOutCirc');
// });
