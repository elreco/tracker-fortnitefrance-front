export default (context, inject) => {
  var initGlobalTheme = () => {
    var $color_primary = '#2575DC';
    var $track_color = '#4b3b60';
    var $track_line_cap = 'round';

    $('#header-mobile__search-icon').on('click', function () {
      $(this).toggleClass('header-mobile__search-icon--close');
      $('.header-mobile').toggleClass('header-mobile--expanded');
    });

    if ($('.content-filter').exists()) {
      $('.content-filter__toggle').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('content-filter__toggle--active');
        $('.content-filter__list').toggleClass('content-filter__list--expanded');
      });
    }
  }
  inject('initGlobalTheme', initGlobalTheme)
}
