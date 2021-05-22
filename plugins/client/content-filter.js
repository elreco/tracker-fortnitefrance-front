
 export default (context, inject) => {
  var initContentFilter = async () => {
    jQuery(async function () {
      await sleep(200);
      $('.content-filter__toggle').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('content-filter__toggle--active');
        $('.content-filter__list').toggleClass('content-filter__list--expanded');
      });
    });
  }
  inject('initContentFilter', initContentFilter)
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
