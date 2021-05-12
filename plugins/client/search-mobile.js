export default (context, inject) => {
  var initSearchMobile = () => {
    $('#header-mobile__search-icon').on('click', function () {
      $(this).toggleClass('header-mobile__search-icon--close');
      $('.header-mobile').toggleClass('header-mobile--expanded');
    });
  }
  inject('initSearchMobile', initSearchMobile)
}
