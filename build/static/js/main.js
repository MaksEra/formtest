$(document).ready(function () {

    //viewport
  function setViewport() {
    var w = $(window);
    var ww = w.width();
    var vps, viewport;
    viewport = document.querySelector("meta[name=viewport]");
    // if (ww <= 1920) {
    //   vps = "width=device-width, user-scalable=no";
    // } else if (ww <= 720) {
    //   vps = "width=720, user-scalable=no";
    // } 
    if (ww <= 750) {
      vps = "width=750, user-scalable=no";
    } else {
      vps = "width=device-width, user-scalable=no";
    }
    //console.log(vps);
    viewport.setAttribute("content", vps);
  }
  //viewport change
  $(window).resize(function() {
    setViewport();
  });
  //load viewport
  setViewport();

  $("#phone").inputmask({
    mask: "+7 (999) 999-99-99"
  });

  /**************
	  MOUSE MOVE
	***************/
	$('.main').mousemove(function(e){
		
		var wx = $(window).width();
		var wy = $(window).height();
		
		var x = e.pageX - this.offsetLeft;
		var y = e.pageY - this.offsetTop;
		
		var newx = x - wx/2;
		var newy = y - wy/2;
		
		$('.main-layers div').each(function(){
			var speed = $(this).attr('data-speed');
			$(this).css({
			   'left' : newx*speed,
			   'top' : newy*speed
			});
		});
		
  });
  
  /***********************
	  OPEN/CLOSE HiddenMenu
	***********************/
  $('.header-button__menu').on('click', function() {
    $('.hidden-menu').addClass('open')
  });
  $('.hidden-menu__close').on('click', function() {
    $('.hidden-menu').removeClass('open')
  });

  /**************
	  TABS ON BLOG
	***************/
  $('.blog-tabs li').on('click', function() {
		var self = $(this);
		var parent = $('.blog .container');
		self.addClass('active').siblings('li').removeClass('active');
		parent.find('.blog-main__list').removeClass('active');
		parent.find('.blog-main__list#' + self.data('target')).addClass('active');
  });
});

