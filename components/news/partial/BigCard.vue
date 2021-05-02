<template>
  <div
    class="main-news-banner main-news-banner--bg main-news-banner--img-left"
    :style="`background:url(${
      news.image ? news.image.url : ''
    });    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;`"
  >
    <!-- <figure class="main-news-banner__img">
      <img :src="news.image ? news.image.url : ''" alt="" />
    </figure> -->
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
              <nuxt-link
                :to="{
                  name: 'news.view',
                  params: { id: news.objectId, slug: news.slug },
                }"
                >{{ news.title }}</nuxt-link
              >
            </h6>
            <time
              :datetime="$moment(news.date.iso).format('YYYY-MM-DD')"
              class="posts__date"
              >{{ $moment(news.date.iso).format('Do MMMM YYYY') }}</time
            >
            <div class="posts__excerpt text-white">
              {{ $voca.truncate($voca.stripTags(news.text), 200, '...') }}
            </div>
            <div class="posts__more">
              <nuxt-link
                :to="{
                  name: 'news.view',
                  params: { id: news.objectId, slug: news.slug },
                }"
                class="btn btn-primary-inverse btn-icon-right"
                >En lire plus <i class="fas fa-angle-right"></i
              ></nuxt-link>
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
