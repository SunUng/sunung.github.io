$(function(){var e=3,i=$(".slider"),t=$(".slider").width(),l=t/e,s=i.find("li"),n=s.height(),o=s.length;s.width(l);for(var a=0;a<e;a++)i.prepend(s.eq(o-1-a).clone()),i.append(s.eq(a).clone());var d=i.find("li").length,r=$(".btn_slide");i.wrap('<div class="slide_wrapper" style="position:relative; width:'+t+"px; height : "+n+'px; background:red;"></div>').css({position:"absolute",top:"0",left:-e*l,width:l*d}),r.click(function(){s.eq(e-1).css("background","blue").siblings().removeAttr("style");var t,n,a=$(this);i.is(":not(:animated)")&&(t=!1,n=a.hasClass("prev")?-1:1,console.log(e),i.animate({left:"+="+-l*n},function(){(t=!!(0===(e+=n)||e>o))&&(e=0===e?o:1,i.css({left:e*-l}))}))}),console.log(e)});