export default (context, inject) => {
  var initGlobalTheme = () => {
    $('#header-mobile__search-icon').on('click', function () {
      $(this).toggleClass('header-mobile__search-icon--close');
      $('.header-mobile').toggleClass('header-mobile--expanded');
    });
  }
  inject('initGlobalTheme', initGlobalTheme)
}
