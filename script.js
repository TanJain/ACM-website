$(function () {
    $(document).scroll(function () {
      var $na = $(".fixed-top");
      $na.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });
