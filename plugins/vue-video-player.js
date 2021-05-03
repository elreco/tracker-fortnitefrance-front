import Vue from 'vue'
import VueVideoPlayer from 'vue-video-player/dist/ssr'

// require videojs style
import 'video.js/dist/video-js.css'

Vue.use(VueVideoPlayer, /* {
  options: global default options,
  events: global videojs events
} */)
