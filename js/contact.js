// //페이지 로드시 커버 이미지 삽입
// $(function() {
//   // var cond = $('.img_cover').attr('data-cover-effect');
//
//   var origin = $('.img_cover').eq(0).attr('src');
//   $('<img/>').attr('src', origin).load(function() {
//     var src = $(this).attr('src');
//     var source = 'url(' + src + ')';
//     $('.intro_cover').css('background-image', source);
//     $('.intro').addClass('loaded');
//     // setInterval(loopBg, 6000);
//     loopBg();
//   });
//   var i = 2;
//   function loopBg() {
//     var bg = $('.img_cover[data-cover-order="'+i+'"]').attr('src');
//     $('.intro_cover').addClass('remove');
//     setTimeout(function(){
//       $('.intro_cover').css('background-image', bg);
//       $('.intro_cover').removeClass('remove').addClass('action');
//     }, 3000);
//     i = (i==2) ? 1 : 2;
//   }
// });
//페이지 로드시 커버 이미지 삽입
$(function() {
  // var cond = $('.img_cover').attr('data-cover-effect');

  var origin = $('.img_cover').eq(0).attr('src');
  $('<img/>').attr('src', origin).load(function() {
    var src = $(this).attr('src');
    var source = 'url(' + src + ')';
    $('.intro_cover').css('background-image', source);
    $('.intro').addClass('loaded');
    // setInterval(loopBg, 6000);
    // loopBg();
  });
  // var i = 2;
  // function loopBg() {
  //   var bg = $('.img_cover[data-cover-order="'+i+'"]').attr('src');
  //   $('.intro_cover').addClass('remove');
  //   setTimeout(function(){
  //     $('.intro_cover').css('background-image', bg);
  //     $('.intro_cover').removeClass('remove').addClass('action');
  //   }, 3000);
  //   i = (i==2) ? 1 : 2;
  // }
});
