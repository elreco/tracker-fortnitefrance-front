export default (context, inject) => {
  var initMpIframe = async () => {
    await sleep(200)
    $('.mp_iframe').magnificPopup({
      type:'iframe',
      removalDelay: 300,
      mainClass: 'mfp-fade',
      autoFocusLast: false,
      callbacks: {
          open: function() {
              $('iframe').attr('allow', 'autoplay');
          },
      },
      patterns: {
        youtube: {
          index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

          id: 'v=', // String that splits URL in a two parts, second part should be %id%
          // Or null - full URL will be returned
          // Or a function that should return %id%, for example:
          // id: function(url) { return 'parsed id'; }

          src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
        },
        vimeo: {
          index: 'vimeo.com/',
          id: '/',
          src: '//player.vimeo.com/video/%id%?autoplay=1'
        },
        twitch: {
          index: 'twitch.tv/',
          id: 'videos/',
          src: '//player.twitch.tv/?autoplay=false&video=v%id%'
        },
        gmaps: {
          index: '//maps.google.',
          src: '%id%&output=embed'
        }
      },

      srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".

    });
  }
  inject('initMpIframe', initMpIframe)
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
