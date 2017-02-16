app.directive('menuOpen', function () {
  function link() {

    var body = document.getElementsByTagName('body')[0];


    jQuery('.top-menu__mobile').on('click', function() {
      jQuery('.top-menu__container').toggle().toggleClass('top-menu__container--open')
      jQuery('.top-menu__mobile').toggleClass('top-menu__mobile-close')
    });


    /* change icon color when scroll */
    window.addEventListener('scroll', function () {
      if(Math.abs(body.getBoundingClientRect().top) >= 770 && Math.abs(body.getBoundingClientRect().top) <= 2699) {
        jQuery('.top-menu__mobile').removeClass('top-menu__mobile-open').addClass('top-menu__mobile--blue')
      }
      else if(Math.abs(body.getBoundingClientRect().top) >= 2700 && Math.abs(body.getBoundingClientRect().top) <= 3349) {
        jQuery('.top-menu__mobile').removeClass('top-menu__mobile--blue').addClass('top-menu__mobile-open')
      }
      else if(Math.abs(body.getBoundingClientRect().top) >= 3350 && Math.abs(body.getBoundingClientRect().top) <= 4844) {
        jQuery('.top-menu__mobile').removeClass('top-menu__mobile-open').addClass('top-menu__mobile--blue')
      }
      else if(Math.abs(body.getBoundingClientRect().top) >= 4845 && Math.abs(body.getBoundingClientRect().top) <= 5749) {
        jQuery('.top-menu__mobile').removeClass('top-menu__mobile--blue').addClass('top-menu__mobile-open')
      }
      else if(Math.abs(body.getBoundingClientRect().top) >= 5750 && Math.abs(body.getBoundingClientRect().top) <= 9800) {
        jQuery('.top-menu__mobile').removeClass('top-menu__mobile-open').addClass('top-menu__mobile--blue')
      }
      else if(Math.abs(body.getBoundingClientRect().top) >= 9801 && Math.abs(body.getBoundingClientRect().top) <= 10935) {
        jQuery('.top-menu__mobile').removeClass('top-menu__mobile--blue').addClass('top-menu__mobile-open')
      }
      else {
        jQuery('.top-menu__mobile').removeClass('top-menu__mobile--blue').addClass('top-menu__mobile-open')
      }
    });

  }

  return {
    link: link,
    restrict: 'EA'
  };
});