$(function() {
  //커버 올리기
  $('.btn_pagedown, .slogan .btn_rect').click(function(){
      var moveAmount = $('.intro').height();
      var coverMoveAmount = $('.intro').height() - $('.sticky_header').height();
      var width = $(window).width();
      if (width >= 992) {
      $("html, body").animate({scrollTop:coverMoveAmount}, 700, 'easeInOutCirc');
    } else {
      $("html, body").animate({scrollTop:moveAmount}, 700, 'easeInOutCirc');
    }
  });
  //프로필 이미지 돌리기
  $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      var imgSpin = $('.blockquote').offset().top + $('.blockquote').height() - 50;
      var imgSpinPoint = scroll + $(window).height();
      if (imgSpinPoint >= imgSpin) {
          $('.img_profile').addClass('active');
      } else {
          $('.img_profile').removeClass('active');
      }
    });
});
//타이핑 효과
$(function(){
   var sentence = [];
   $('.slogan_second').find('span').each(function(){
      var text = $(this).text().trim();
      sentence.push(text);
   });
   $("#slogan").typed({
      strings: sentence,
      typeSpeed: 150,
      loop: true,
      backDelay: 3000,
      cursorChar: '<div class="cursor_bar">'
   });
});
//인트로 캐러셀
$(function(){
   var owl = $('.slide_skills');
   owl.owlCarousel({
       center: true,
       items:3,
       loop:true,
       smartSpeed:700,
       autoplay:true,
       autoplayTimeout:3000,
       autoplayHoverPause:true,
       nav:true,
       navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
       responsiveClass:true,
       responsive : {
           0 : {
              items:1
           },
           480 : {
              items:2
           },
           768 : {
              items:3
           }

       }
   });
   owl.on('changed.owl.carousel', function(e) {
      var index = e.page.index;
      var target = $('.skil_desc_item');
      target.removeClass('active').eq(index).addClass('active');
      $('.skill_bar_fill_inner').removeAttr('style');
      target.eq(index).find('.skill_bar_item').each(function(){
         var percent = $(this).attr('data-skill-percent');
         var inherit = $(this);
         setTimeout(function(){
            inherit.find('.skill_bar_fill_inner').animate({width: percent+'%'}, 500 ).find('.skill_percent').text(percent+'%');
         }, 500);
      });
    });
    var loadSkillBar = $('.skil_desc_item.active');
    loadSkillBar.find('.skill_bar_item').each(function(){
      var loadSkillPercent = $(this).attr('data-skill-percent');
      $(this).find('.skill_bar_fill_inner').animate({width: loadSkillPercent+'%'}, 500 ).find('.skill_percent').text(loadSkillPercent+'%');
   });
 });
