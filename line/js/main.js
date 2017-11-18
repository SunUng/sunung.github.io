// //사파리에서 viewport설정과 관계없이 zoom이되는 기능 방지
// document.documentElement.addEventListener('touchstart', function (event) {
//     if (event.touches.length > 1) {
//       event.preventDefault();
//     }
// }, false);
// var lastTouchEnd = 0;
// document.documentElement.addEventListener('touchend', function (event) {
//     var now = (new Date()).getTime();
//     if (now - lastTouchEnd <= 300) {
//       event.preventDefault();
//     }
//     lastTouchEnd = now;
// }, false);


//이미지
function ImageCover(img){
  img.each(function(){
    var image = $(this);
    var src = image.attr('src');
    image.parent().attr('data-src', src).css({
      'background-image': 'url('+src+')',
      'background-position': 'center',
      'background-repeat': 'no-repeat',
      'background-size': 'cover'
    });
    image.remove();
  });
}


/* noise tv effect : original source : https://codepen.io/eugene-bulkin/pen/zEgyH?editors=1010 */
var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d');

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.onresize = resize;

function noise(ctx) {

    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        idata = ctx.createImageData(w, h),
        buffer32 = new Uint32Array(idata.data.buffer),
        len = buffer32.length,
        i = 0;

    for(; i < len;)
        buffer32[i++] = ((255 * Math.random())|0) << 24;

    ctx.putImageData(idata, 0, 0);
}

var toggle = true;

// added toggle to get 30 FPS instead of 60 FPS
(function loop() {
    toggle = !toggle;
    if (toggle) {
        requestAnimationFrame(loop);
        return;
    }
    noise(ctx);
    requestAnimationFrame(loop);
})();

// $(document).ready(function(){
//     var myDate = new Date();
//     var displayDate = (myDate.getMonth()+1) + '/' + (myDate.getDate()) + '/' + (myDate.getFullYear()) + '  ' + myDate.getHours() + ':' + myDate.getMinutes() + ':' + myDate.getSeconds();
//     $('.today').text(displayDate);
// });

$(document).ready(function() {
    var interval = setInterval(function() {
        var momentNow = moment();
        $('.today').html(momentNow.format('YYYY/MM/DD') + ' ' + momentNow.format('Ahh:mm:ss'));
    }, 100);
});

//비디오배경
function YTPcall() {
$('.video_background').YTPlayer({
    fitToBackground: true,
    // videoId: 'LSmgKRx5pBo'
    videoId: 'zydTSfTNUeY'
});
};

(function ( $ ) {
    // $.removeCookie('visited', { path: '/' });
    $.ajax({
        type:"get",
        url: "./main.html",
        dataType: "html",
        success: function(data) {
          $('.wrapper').html(data);
          YTPcall();
        },
        beforeSend:function(){
          if ($.cookie('visited') !== 'yes') {
            $('.signal_background').addClass('on');
            $.cookie('visited','yes', { path: '/', secure : false });
          }
        },
        complete:function(){
          setTimeout(function(){
            $('.signal_background').removeClass('on');
          }, 1000);
        }
    });
}( jQuery ));
$(window).unload(function() {
  $.removeCookie('visited', { path: '/' });
});
$(window).on('beforeunload', function(e) {
  $.removeCookie('visited', { path: '/' });
});


//메뉴토글
// $(document).mouseup(function(e) {
//   var btn = $('.gnb');
//   if ((!btn.is(e.target) && btn.has(e.target).length === 0)) {
//     btn.removeClass('on');
//   } else {
//     btn.addClass('on');
//   }
// });
// $('.gnb_btn').click(function(){
//   $('.gnb').toggleClass('on');
// });
$('.gnb_btn').click(function(){
  $('.gnb').toggleClass('on');
});
$('body').click(function(e){
  var ele = $('.gnb');
    if ((!ele.is(e.target) && ele.has(e.target).length === 0)) {
      ele.removeClass('on');
    }
});
// Ajax 페이지 히스토리
// Ajax 페이지 히스토리
$(function(){

	var History = window.History;
	if (History.enabled) {
		var page = get_url_value('page');
		var path = page ? page : 'main';
		// Load the page
		load_page_content(path);
	} else {
		return false;
	}

	// Content update and back/forward button handler
	History.Adapter.bind(window, 'statechange', function() {
		var State = History.getState();
		// Do ajax
		load_page_content(State.data.path);
		// Log the history object to your browser's console
		History.log(State);
	});
	// Navigation link handler

  var preventClick = true;
	// $('body').on('click', '.ajax_anchor', function(e) {
  var chennel_time = 500;
  $('.ajax_anchor').click(function(e){
		e.preventDefault();
    if (preventClick === true) {
      preventClick = false;
  		var urlPath = $(this).attr('href');
  		var title = $(this).text();
  		History.pushState({path: urlPath}, title, './?page=' + urlPath); // When we do this, History.Adapter will also execute its contents.
    } else {
    }
    setTimeout(function(){
      preventClick = true;
    }, chennel_time);
	});
	function load_page_content(page) {
		$.ajax({
			type: 'get',
			url: page + '.html',
			data: {},
			success: function(response) {
				$('.wrapper').html(response);
        if (page === 'main') {
          YTPcall();
        } else {
          setTimeout(function(){
            $('.subpage').addClass('loaded');
          }, 500);
        }

        if (page === 'portfolio') {
          ImageCover($('.pp_list_thumb img'));
        }
			},
      beforeSend:function(){
        $('.noise_background').addClass('on');
      },
      complete:function(){
        setTimeout(function(){
          $('.noise_background').removeClass('on');
        }, chennel_time);
      }
		});
	}
	function get_url_value(variable) {
	   var query = window.location.search.substring(1);
	   var vars = query.split("&");
	   for (var i=0;i<vars.length;i++) {
			   var pair = vars[i].split("=");
			   if(pair[0] == variable){return pair[1];}
	   }
	   return(false);
    }
});

//포트폴리오
//포트폴리오
//포트폴리오
//포트폴리오
//포트폴리오
$(document).on('click', '.btn_pp_close',function(){
  $('.portfolio_inner').removeClass('active');
  $('.pp_list a').removeClass('spotlight');
});

$(document).on('click', '.pp_list a',function(){

  var ele = $(this);
  var title = $(this).find('.pp_list_title').text();
  var src = $(this).find('.pp_list_thumb').attr('data-src');
  var client = $(this).find('.pp_list_client').text();
  var target = $(this).find('.pp_list_target').text();
  var date = $(this).find('.pp_list_date').text();
  var desc = $(this).find('.pp_list_desc').text();

  $('.pp_output_title').text(title);
  $('.pp_thumb img').attr('src',src);
  $('.pp_output_client').text(client);
  $('.pp_output_target').text(target);
  $('.pp_output_date').text(date);
  $('.pp_output_desc').text(desc);

  if (($(this).parents('.portfolio_inner').hasClass('active')) && (!$(this).hasClass('spotlight'))) {
    $('.portfolio_inner').removeClass('active');
    setTimeout(function(){
      $('.portfolio_inner').addClass('active');
      ele.addClass('spotlight').parents('li').siblings().find('a').removeClass('spotlight');
    }, 500);
  } else if ((!$(this).parents('.portfolio_inner').hasClass('active')) && (!$(this).hasClass('spotlight'))) {
    $('.portfolio_inner').addClass('active');
    ele.addClass('spotlight').parents('li').siblings().find('a').removeClass('spotlight');
  } else {
    $('.portfolio_inner').removeClass('active');
    ele.removeClass('spotlight').parents('li').siblings().find('a').removeClass('spotlight');
  }
});
