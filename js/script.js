$(function () {
  // カルーセル
  $(".carousel").slick({
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 5000,
    fade: true,
    arrows: false,
  });

  // a要素を薄くする
  $("a").on("mouseenter", function () {
    $(this).animate(
      {
        opacity: 0.5,
      },
      500
    );
  });

  $("a").on("mouseout", function () {
    $(this).animate(
      {
        opacity: 1,
      },
      300
    );
  });

  // スクロールでTOPに戻るボタンを表示する
  $(window).scroll(function () {
    const scrollValue = $(window).scrollTop();
    if (scrollValue >= 100) {
      $(".top-btn").fadeIn();
    } else {
      $(".top-btn").fadeOut();
    }
  });

  $('a[href^="#"]').click(function () {
    const href = $(this).attr("href");
    const target = $(href == "#" ? "html" : href);
    const position = target.offset().top;
    $("body, html").animate(
      {
        scrollTop: position,
      },
      400,
      "swing"
    );
  });
});
