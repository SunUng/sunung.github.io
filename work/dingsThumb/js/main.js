//플러그인 시작
(function ( $ ) {
  $.fn.dingsThumb = function(options) {
    return this.each(function() {
      var opts = $.extend( {}, $.fn.dingsThumb.defaults, options );
      var box = $(this), cover = opts.cover;
      var boxRatio = box.height() / box.width();
      var img = box.find('img'), imgRatio = img.height() / img.width();
      var referCalc = (imgRatio / boxRatio) > 1, refer = cover === true ? referCalc : !referCalc;
      box.css({'position' : 'relative', 'overflow' : 'hidden'});
      var size = refer === true ? img.css('width','100%') : img.css('height','100%');
      img.css({
      'position':'absolute',
      'top':'50%',
      'left':'50%',
      '-webkit-transform' : 'translate(-50%,-50%)',
      '-moz-transform' : 'translate(-50%,-50%)',
      '-ms-transform' : 'translate(-50%,-50%)',
      '-o-transform' : 'translate(-50%,-50%)',
      'transform' : 'translate(-50%,-50%)'
      });
    });
  };
  $.fn.dingsThumb.defaults = {
      cover : true
  };
}( jQuery ));
//플러그인 끝

//--------------------------- 플러그인 끝
//--------------------------- 플러그인 끝

//--------------------------- 플러그인 실행
//--------------------------- 플러그인 실행

$(window).load(function(){
  //썸네일 background-size:cover 형태
  $('.cover').dingsThumb();
  //썸네일안에 이미지 전체 집어넣는 형태
  $('.nocover').dingsThumb({
    cover : false
  });
});

//--------------------------- 클릭 이벤트 데모
//--------------------------- 클릭 이벤트 데모

$(document).on('click', '.btn', function(){
  var cover = $(this).hasClass('cover');
  var sourceImg = $(this).find('img').attr('src');
  var target = $(this).closest('.right').siblings('.left').find('.thumbnail');
  target.find('img').remove();
  target.append('<img src="'+sourceImg+'">');
  if (cover === true) {
    target.dingsThumb();
  } else {
    target.dingsThumb({
      cover : false
    });
  }
});
