app.directive('menuOpen', function () {
  function link() {

    var body = document.getElementsByTagName('body')[0];


    jQuery('.top-menu__mobile').on('click', function() {
      jQuery('.top-menu__mobile').toggleClass('top-menu__mobile-open').toggleClass('top-menu__mobile--blue')
      jQuery('.top-logo-text').toggleClass('logo-text')
    });


  }

  return {
    link: link,
    restrict: 'EA'
  };
});