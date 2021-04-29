export default (context, inject) => {
  var initRevSlider = () => {
    var revapi, tpj;
    if (tpj === undefined) {
      tpj = jQuery;
      if ("off" == "on") {
        tpj.noConflict();
      }
    }
    if (tpj("#hero-revslider").revolution == undefined) {
      revslider_showDoubleJqueryError("#hero-revslider");
    } else {
      revapi = tpj("#hero-revslider").show().revolution({
        sliderType: "standard",
        jsFileLocation: "revolution/js/",
        sliderLayout: "auto",
        dottedOverlay: "fourxfour",
        delay: 9000,
        revealer: {
          direction: "tlbr_skew",
          color: "#1d1429",
          duration: "1500",
          delay: "0",
          easing: "Power3.easeOut",
          spinner: "2",
          spinnerColor: "rgba(0,0,0,",
        },
        navigation: {
          keyboardNavigation: "off",
          keyboard_direction: "horizontal",
          mouseScrollNavigation: "off",
          mouseScrollReverse: "default",
          onHoverStop: "off",
          arrows: {
            style: "metis",
            enable: true,
            hide_onmobile: false,
            hide_onleave: false,
            tmp: '',
            left: {
              container: "layergrid",
              h_align: "right",
              v_align: "bottom",
              h_offset: 72,
              v_offset: 0
            },
            right: {
              container: "layergrid",
              h_align: "right",
              v_align: "bottom",
              h_offset: 12,
              v_offset: 0
            }
          }
        },
        responsiveLevels: [1200, 992, 768, 576],
        visibilityLevels: [1200, 992, 768, 576],
        gridwidth: [1420, 992, 768, 576],
        gridheight: [620, 580, 460, 400],
        lazyType: "none",
        parallax: {
          type: "scroll",
          origo: "slidercenter",
          speed: 400,
          speedbg: 0,
          speedls: 0,
          levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, -10, -15, -20, -25, 50, 51, 55],
        },
        shadow: 0,
        spinner: "spinner5",
        stopLoop: "off",
        stopAfterLoops: -1,
        stopAtSlide: -1,
        shuffle: "off",
        autoHeight: "off",
        hideThumbsOnMobile: "off",
        hideSliderAtLimit: 0,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        debugMode: false,
        fallbacks: {
          simplifyAll: "off",
          nextSlideOnWindowFocus: "off",
          disableFocusListener: false,
        }
      });
    }; /* END OF revapi call */

    RsRevealerAddOn(tpj, revapi, "<div class='rsaddon-revealer-spinner rsaddon-revealer-spinner-2'><div class='rsaddon-revealer-2' style='border-top-color: {{color}}0.65); border-bottom-color: {{color}}0.15); border-left-color: {{color}}0.65); border-right-color: {{color}}0.15)'><\/div><\/div>");
    RsTypewriterAddOn(tpj, revapi);
  }
  inject('initRevSlider', initRevSlider)
}
