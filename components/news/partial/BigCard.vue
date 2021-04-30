<template>
  <div class="main-news-banner main-news-banner--bg main-news-banner--img-left">
    <figure class="main-news-banner__img">
      <img
        src="~assets/images/esports/samples/character-news-banner__img.png"
        alt=""
      />
    </figure>
    <div class="main-news-banner__inner">
      <div class="posts posts--simple-list posts--simple-list--xlg">
        <div class="posts__item posts__item--category-1">
          <div class="posts__inner">
            <div class="posts__cat">
              <news-partial-tag
                v-for="tag in news.tags"
                :key="tag"
                :tag="tag"
              />
            </div>
            <h6 class="posts__title">
              <a href="_esports_blog-post-2.html">{{ news.title }}</a>
            </h6>
            <time datetime="2017-08-23" class="posts__date"
              >August 27th, 2018</time
            >
            <div class="posts__excerpt">
              {{ $voca.truncate($voca.stripTags(news.text), 200, '...') }}
            </div>
            <div class="posts__more">
              <a
                href="_esports_blog-post-2.html"
                class="btn btn-primary-inverse btn-icon-right"
                >En lire plus <i class="fas fa-angle-right"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tagColors from '@/static/json/tag-colors.json'
import NewsPartialTag from './Tag'

export default {
  components: {
    NewsPartialTag,
  },
  props: {
    news: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getColor(tag) {
      if (tagColors[tag]) {
        return tagColors[tag]
      } else {
        return 'category-1'
      }
    },
  },
}
</script>
