<template>
  <div class="rev_slider_wrapper container" data-source="gallery">
    <div
      id="hero-revslider_wrapper"
      class="rev_slider_wrapper"
      data-alias="funky-slider"
      data-source="gallery"
      style="
        margin: 0px auto;
        background: transparent;
        padding: 0px;
        margin-top: 0px;
        margin-bottom: 0px;
      "
    >
      <div id="hero-revslider" class="rev_slider" data-version="5.4.7.2">
        <ul>
          <template v-for="n in news">
            <li
              :key="n.objectId"
              data-transition="fade"
              data-slotamount="default"
              data-hideafterloop="0"
              data-hideslideonmobile="off"
              data-easein="default"
              data-easeout="default"
              data-masterspeed="300"
              data-rotate="0"
              data-saveperformance="off"
              data-title="Slide"
            >
              <img
                :src="n.image ? n.image.url : ''"
                data-bgcolor="#1d1429"
                alt=""
                data-bgposition="center center"
                data-bgfit="cover"
                data-bgrepeat="no-repeat"
                data-bgparallax="off"
                class="rev-slidebg"
                data-no-retina
              />

              <div
                id="slide2-layer3"
                class="
                  tp-caption tp-resizeme
                  alc-hero-slider__h alc-hero-slider__h--h1
                  rs-parallaxlevel-10
                "
                data-x="['left','left','left','left']"
                data-hoffset="['120','40','30','20']"
                data-y="['top','top','top','top']"
                data-voffset="['125','150','120','70']"
                data-fontsize="['90','72','56','42']"
                data-lineheight="['90','72','56','42']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-type="text"
                data-responsive_offset="on"
                data-frames='[{"delay":500,"speed":1000,"frame":"0","from":"x:-200px;sX:1;sY:1;opacity:0;","to":"o:1;","ease":"Power4.easeOut"},{"delay":"wait","speed":650,"frame":"999","to":"x:-200px;opacity:0;","ease":"Power4.easeIn"}]'
                style="z-index: 6"
              >
                <div
                  class="rs-looped rs-wave text-shadow"
                  data-speed="2"
                  data-angle="0"
                  data-radius="2px"
                  data-origin="50% 50%"
                >
                  {{ $voca.truncate(n.title, 20, '...') }}
                </div>
              </div>

              <div
                id="slide2-layer4"
                class="
                  tp-caption tp-resizeme
                  alc-hero-slider__h
                  alc-hero-slider__h--h1
                  alc-hero-slider__h--color-primary
                  rs-parallaxlevel-10
                "
                data-x="['left','left','left','left']"
                data-hoffset="['120','40','30','20']"
                data-y="['top','top','top','top']"
                data-voffset="['210','210','175','115']"
                data-fontsize="['90','72','56','42']"
                data-lineheight="['90','72','56','42']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-type="text"
                data-responsive_offset="on"
                data-frames='[{"delay":600,"speed":1000,"frame":"0","from":"x:200px;sX:1;sY:1;opacity:0;","to":"o:1;","ease":"Power4.easeOut"},{"delay":"wait","speed":650,"frame":"999","to":"x:200px;opacity:0;","ease":"Power4.easeIn"}]'
                style="z-index: 7"
              >
                <div
                  class="rs-looped rs-wave text-shadow"
                  data-speed="2"
                  data-angle="0"
                  data-radius="2px"
                  data-origin="50% 50%"
                >
                  {{ $voca.truncate(n.subtitle, 20, '...') }}
                </div>
              </div>

              <div
                id="slide2-layer5"
                class="
                  tp-caption tp-resizeme
                  alc-hero-slider__h alc-hero-slider__h--h5
                  rs-parallaxlevel-11
                  text-shadow
                "
                data-x="['left','left','left','left']"
                data-hoffset="['120','40','30','20']"
                data-y="['top','top','top','top']"
                data-voffset="['96','130','95','45']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-type="text"
                data-typewriter='{"lines":"Fortnite Battle Royale","enabled":"on","speed":"80","delays":"1%7C100","looped":"on","cursorType":"one","blinking":"on","word_delay":"off","sequenced":"on","hide_cursor":"off","start_delay":"500","newline_delay":"1000","deletion_speed":"30","deletion_delay":"3000","blinking_speed":"500","linebreak_delay":"60","cursor_type":"one","background":"off"}'
                data-responsive_offset="on"
                data-frames='[{"delay":700,"speed":1000,"frame":"0","from":"y:50px;z:0;rX:45deg;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power4.easeOut"},{"delay":"wait","speed":500,"frame":"999","to":"y:-10px;opacity:0;","ease":"Power3.easeInOut"}]'
                data-textAlign="['inherit','inherit','inherit','inherit']"
                data-paddingtop="[0,0,0,0]"
                data-paddingright="[0,0,0,0]"
                data-paddingbottom="[0,0,0,0]"
                data-paddingleft="[0,0,0,0]"
                style="z-index: 8"
              >
                Dernière news !
              </div>

              <div
                id="slide2-layer6"
                class="
                  tp-caption tp-resizeme
                  alc-hero-slider__text
                  rs-parallaxlevel-11
                  text-white text-shadow
                  font-weight-bold
                "
                data-x="['left','left','left','left']"
                data-hoffset="['120','40','30','20']"
                data-y="['top','top','top','top']"
                data-voffset="['315','290','250','175']"
                data-fontsize="['14','12','11','10']"
                data-lineheight="['21','18','56','15']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-type="text"
                data-responsive_offset="on"
                data-frames='[{"delay":1000,"speed":1000,"frame":"0","from":"rX:90deg;sX:1;sY:1;opacity:0;","to":"o:1;tO:50% 0%;","ease":"Power4.easeOut"},{"delay":"wait","speed":500,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"},{"frame":"hover","speed":"200","ease":"Power1.easeInOut","to":"o:1;rX:0;rY:0;rZ:0;z:0;"}]'
                data-textAlign="['inherit','inherit','inherit','inherit']"
                data-paddingtop="[0,0,0,0]"
                data-paddingright="[0,0,0,0]"
                data-paddingbottom="[0,0,0,0]"
                data-paddingleft="[0,0,0,0]"
                style="z-index: 9"
              >
                <p style="max-width: 230px">
                  {{ $voca.truncate($voca.stripTags(n.text), 100, '...') }}
                </p>
              </div>

              <div
                id="slide2-layer7"
                class="tp-caption tp-resizeme rs-parallaxlevel-10"
                data-x="['left','left','left','left']"
                data-hoffset="['120','40','30','20']"
                data-y="['bottom','bottom','bottom','bottom']"
                data-voffset="['170','160','105','125']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-type="button"
                data-basealign="slide"
                data-responsive_offset="on"
                data-frames='[{"delay":1500,"speed":1000,"frame":"0","from":"rX:90deg;sX:1;sY:1;opacity:0;","to":"o:1;tO:50% 0%;","ease":"Power4.easeOut"},{"delay":"wait","speed":500,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"},{"frame":"hover","speed":"200","ease":"Power1.easeInOut","to":"o:1;rX:0;rY:0;rZ:0;z:0;"}]'
                style="z-index: 10"
              >
                <nuxt-link
                  :to="{
                    name: 'news.view',
                    params: { id: n.objectId, slug: n.slug },
                  }"
                  class="btn btn-primary-inverse btn-icon-right"
                  >En savoir plus <i class="fas fa-angle-right"></i
                ></nuxt-link>
              </div>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      news: [],
    }
  },
  async fetch() {
    this.news = await this.getNews()
  },
  watch: {
    '$fetchState.pending'() {
      if (!this.$fetchState.pending && this.news && this.news.length) {
        this.$nextTick(() => this.$initRevSlider())
      }
    },
  },
  methods: {
    async getNews() {
      const params = {
        limit: 3,
        count: 1,
        order: '-date',
        where: {
          type: 'normal',
        },
      }
      const { results } = await this.$store.dispatch('news/fetch', params)
      return results
    },
  },
}
</script>
