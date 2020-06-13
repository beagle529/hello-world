// scroll to id
$("#lokimenu a, a#scrolltop").click(function () {
    let who = $(this).attr("href");                                   //目標名稱
    let val = $(who).offset().top - $("#lokimenu").innerHeight() + 1;  //該目標之定位點值
    $("html").animate(
      { scrollTop: val }, 1000, "swing"
    );
  });


// scroll spy
  $(window).scroll(() => {
    spy(); // scroll spy
  });
  spy(); // scroll spy
  
  function spy() {
    let nowat = $(window).scrollTop();
    $('section').each(function () {
      let
        id = $(this).attr('id'),
        offset = $(this).offset().top - $("#lokimenu").innerHeight(),
        height = $(this).innerHeight();
  
      if (offset <= nowat && nowat < offset + height) {
        $("#lokimenu a").removeClass('active');
        $(`#lokimenu a[href='#${id}']`).addClass('active');
      };
    });
  }