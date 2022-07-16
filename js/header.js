$(window).on('load',function(){
  let $header = $("#header");
  let headeriamgebottom;
  let title = document.title;


  $(window).on("load scroll", function () {
    var value = $(this).scrollTop();

      if (value > 0) { //スクロールしたら.scroll付与
        $header.addClass("scroll");
      } else {
        $header.removeClass("scroll");
      }
    }
  );
  })