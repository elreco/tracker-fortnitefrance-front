
 export default (context, inject) => {
  var initContentFilter = async () => {
    await sleep(250);
    $('.content-filter__toggle').on('click', function () {
      $(this).toggleClass('content-filter__toggle--active');
      $('.content-filter__list').toggleClass('content-filter__list--expanded');
    });
  }
  inject('initContentFilter', initContentFilter)
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
