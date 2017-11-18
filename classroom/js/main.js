
$(function() {
  // var view = 3;
  var current = 3;
  var slider = $('.slider');
  var sliderWidth = $('.slider').width();
  var oneWidth = sliderWidth / current;
  var item = slider.find('li');
  var itemHeight = item.height();
  var length = item.length;
  item.width(oneWidth);
  for (var i = 0; i < current; i++) {
    slider.prepend(item.eq((length-1)-i).clone());
    slider.append(item.eq(i).clone());
  }
  var allitem = slider.find('li').length;
  var button = $('.btn_slide');
    // slider.wrap('<div class="slide_wrapper" style="position:relative; width:'+ sliderWidth +'px; height : '+ itemHeight +'px; overflow:hidden;"></div>').css({
    slider.wrap('<div class="slide_wrapper" style="position:relative; width:'+ sliderWidth +'px; height : '+ itemHeight +'px; background:red;"></div>').css({
      'position' : 'absolute',
      'top' : '0',
      'left' : -(current * oneWidth),
      'width' : oneWidth * allitem
    });

  button.click(function(){
               item.eq(current-1).css('background','blue').siblings().removeAttr('style');
    var btn = $(this);
    var cycle, delta;
    if (slider.is(':not(:animated)')) {
           cycle = false;
           delta = (btn.hasClass('prev'))? -1 : 1;
           console.log(current)
           slider.animate({ left: "+=" + (-oneWidth * delta) }, function() {
               current += delta;
               cycle = !!(current === 0 || current > length);
               if (cycle) {
                   current = (current === 0) ? length : 1;
                   slider.css({left:  current * -oneWidth });
               }

           });
        }
  });

  console.log(current);










});

// $(function() {
//   var slider = $('.slider');
//   var slide = slider.find('li');
//   var count = slide.length;
//   var item = 3;
//   var margin = 10;
//   var padding = margin / 2;
//   var sliderWidth = slider.width();
//   var slideWidth = sliderWidth / item;
//   var slideHeight = slide.height();
//   var sourceWrap = '<div class="slider_wrap" style="overflow:hidden; width:'+ count * slideWidth +'px; height:'+slideHeight+'px"></div>';
//   slider.css('position', 'relative').wrap(sourceWrap);
//   slide.each(function(i){
//     $(this).css({
//       'position' : 'absolute',
//       'top' : '0',
//       'left' : i * slideWidth
//     }).addClass('id'+i);
//   });
//
//     // $('.next').click(function(){
//     //   var first = slider.find('li').eq(0);
//     //   slider.find('li').each(function(i){
//     //     var move = (i * slideWidth) - slideWidth;
//     //     $(this).stop().animate({
//     //         left: move
//     //       }, 500, function(){
//     //         first.appendTo(slider).css('left', (count * slideWidth) - slideWidth);
//     //       });
//     //
//     //   });
//     // });
//
//
//     $('.slide-ui').click(function() {
//       var func = $(this).hasClass('next');
//       slide = slider.find('li');
//       var moveItem = func ? slide.eq(0) : slide.last();
//
//       slider.find('li').each(function(i) {
//         var move = calcLeft(i);
//
//         if (func) {
//           animateSlide($(this), move);
//           // 어펜드
//         } else {
//           prependSlide();
//           animateSlide($(this), move);
//           // 애니메이션
//         }
//         // $(this).stop().animate({
//         //   left: move
//         // }, 500, function() {
//         //   func ? appendSlide() : prependSlide();
//         // });
//       });
//
//       function animateSlide(target, value) {
//         target.stop().animate({
//           left: value
//         }, 500, function() {
//           func && appendSlide();
//         });
//       }
//       function appendSlide() {
//         moveItem.appendTo(slider).css('left', calcLeft(count));
//       }
//       function prependSlide() {
//         moveItem.prependTo(slider).css('left', -Math.abs(calcLeft(count)));
//       }
//
//       function calcLeft(index) {
//         var value = (index * slideWidth) - slideWidth;
//         return value;
//       }
//     });
//   // slider.css('position', 'relative').wrap(sourceWrap).find('img').each(function(){
//   //   var src = $(this).attr('src');
//   //   var parent = $(this).parent();
//   //   parent.css({
//   //     'background-image' : 'url("'+ src +'")',
//   //     'background-size' : 'cover',
//   //     'background-position' : 'center',
//   //     'background-repeat' : 'no-repeat'
//   //   });
//   //   $(this).remove();
//   // });;
//   // slide.each(function(i){
//   //   var sourceInner = '<div class="slide_inner" style="float:left; display:inline-block; width:100%; height:100%; overflow:hidden;"></div>';
//   //   $(this).css({'position' : 'absolute', 'left': slideWidth * i, 'width' : slideWidth, 'display' : 'inline-block'});
//   //   // $(this).css({'float' : 'left', 'width' : slideWidth, 'padding-left' : padding, 'padding-right' : padding}).wrapInner(sourceInner);
//   //   slide.first().css('padding-left','0');
//   //   slide.eq(item-1).css('padding-right','0');
//   //
//   // });
//
//
// });
//
// // $(function() {
// //   var slider = $('.slider');
// //   var slide = slider.find('li');
// //   var count = slide.length;
// //   var item = 3;
// //   var margin = 10;
// //   var padding = margin / 2;
// //   var sliderWidth = slider.width();
// //   var slideWidth = sliderWidth / item;
// //   var sourceWrap = '<div class="slider_wrap" style="overflow:hidden;"></div>';
// //   slider.wrap(sourceWrap).find('img').each(function(){
// //     var src = $(this).attr('src');
// //     var parent = $(this).parent();
// //     parent.css({
// //       'background-image' : 'url("'+ src +'")',
// //       'background-size' : 'cover',
// //       'background-position' : 'center',
// //       'background-repeat' : 'no-repeat'
// //     });
// //     $(this).remove();
// //   });;
// //   slide.each(function(){
// //
// //     var sourceInner = '<div class="slide_inner" style="float:left; display:inline-block; width:100%; height:100%; overflow:hidden;"></div>';
// //     slider.css({'display' : 'inline-block', 'width' : count * slideWidth});
// //     $(this).css({'float' : 'left', 'width' : slideWidth, 'padding-left' : padding, 'padding-right' : padding}).wrapInner(sourceInner);
// //     slide.first().css('padding-left','0');
// //     slide.eq(item-1).css('padding-right','0');
// //
// //   });
// //
// //   $('.next').click(function(){
// //     console.log(slideWidth)
// //     slider.css({
// //       '-webkit-transform' : 'translateX(-'+ slideWidth +'px)',
// //       '-moz-transform'    : 'translateX(-'+ slideWidth +'px)',
// //       '-ms-transform'     : 'translateX(-'+ slideWidth +'px)',
// //       '-o-transform'      : 'translateX(-'+ slideWidth +'px)',
// //       'transform'         : 'translateX(-'+ slideWidth +'px)'
// //     }).on("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function() {
// //       slider.append(slide.eq(0));
// //       $(this).css({
// //         '-webkit-transform' : 'none',
// //         '-moz-transform'    : 'none',
// //         '-ms-transform'     : 'none',
// //         '-o-transform'      : 'none',
// //         'transform'         : 'none'
// //       })
// //
// //     });
// //
// //   });
// //
// // });
//
//
// // $(function() {
// //   //헤더 인클루드
// //   var path = $('body').attr('data-page-path');
// //   $('.header_original').load('./include/header.html', function(e) {
// //     $('.path').text(path);
// //     $('li[data-menu-path="'+path+'"]').addClass('on');
// //     var source = $(this).children().clone();
// //     $('.header_clone, .navigation_area').append(source);
// //   });
// //   //메뉴 클릭 동작
// //   $(document).on('click', '.gnb_list a', function(event){
// //     var thisPath = $(this).parents('li').attr('data-menu-path');
// //     if (thisPath === path) {
// //       event.preventDefault();
// //       var scroll = $(window).scrollTop();
// //       var cover = $('.intro').height()-80;
// //       if (scroll >= cover) {
// //         $("html, body").clearQueue().animate({scrollTop:0}, 700, 'easeInOutCirc');
// //       }
// //     }
// //   });
// // });
// //
// // $(function() {
// //     //스티커 메뉴 출력
// //     $(window).scroll(function(){
// //         var coverMoveAmount = $('.intro').height() - $('.sticky_header').height();
// //         var scroll = $(window).scrollTop();
// //         if (scroll >= coverMoveAmount) {
// //             $('.intro').addClass('take-off');
// //         } else {
// //             $('.intro').removeClass('take-off');
// //         }
// //     });
// // });
// //
// // //스크롤 액션 이펙트 (페이지리로드시)
// // $(document).ready(function(){
// //    var scroll = $(window).scrollTop();
// //    var bottom = scroll + $(window).height();
// //    var anchor = bottom - 50;
// //    $('.action').each(function(){
// //       var offset = $(this).offset().top;
// //       if (anchor >= offset) {
// //          $(this).addClass('on');
// //       } else {
// //          $(this).removeClass('on')
// //       }
// //    });
// // });
// // //스크롤 액션 이펙트 (스크롤시)
// // $(window).scroll(function(){
// //    var scroll = $(window).scrollTop();
// //    var bottom = scroll + $(window).height();
// //    var anchor = bottom - 50;
// //    $('.action').each(function(){
// //       var offset = $(this).offset().top;
// //       if (anchor >= offset) {
// //          $(this).addClass('on');
// //       } else {
// //          $(this).removeClass('on')
// //       }
// //    });
// // });
// //
// // //페이지 로드시 커버 이미지 삽입
// // $(function() {
// //   var cond = $('.intro').attr('data-cover-action');
// //   if (cond !== 'off') {
// //     var img = $('.img_cover').length > 0;
// //     if (img === true) {
// //       var origin = $('.img_cover').attr('src');
// //       $('<img/>').attr('src', origin).load(function() {
// //         var src = $(this).attr('src');
// //         var source = 'url(' + src + ')';
// //         $('.intro_cover').css('background-image', source);
// //         $('.intro').addClass('loaded');
// //         $('.slogan').find('p').addClass('loaded');
// //       });
// //     } else {
// //       $('.intro').addClass('loaded');
// //       $('.slogan').find('p').addClass('loaded');
// //     }
// //   }
// // });
// //
// // $(document).on('click','.gnb_switch', function(){
// //   $('body').toggleClass('menu-on');
// // });
// // $('.backside_closer').click(function(){
// //   $('body').removeClass('menu-on');
// // });
// //
// // // $('.btn_gotop').click(function(){
// // //   $("html, body").clearQueue().animate({scrollTop:0}, 700, 'easeInOutCirc');
// // // });
