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

  // スムーズスクロール
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

  // スクロールでコンテンツをフェードイン
  $(window).scroll(function () {
    const wHeight = $(window).height();
    const wScroll = $(window).scrollTop();
    $("section").each(function () {
      const sPosition = $(this).offset().top;
      if (wScroll > sPosition - wHeight + 100) {
        $(this).addClass("fadeIn");
      }
    });
  });

  // クリックでモーダルで画像を拡大する
  $(".item img").click(function () {
    const src = $(this).attr("src");
    $(".modal-content").attr("src", src);
    $(".modal-wrap").fadeIn(200);
    return false;
  });

  $(".close-btn").click(function () {
    $(".modal-wrap").fadeOut(200);
    return false;
  });
});
