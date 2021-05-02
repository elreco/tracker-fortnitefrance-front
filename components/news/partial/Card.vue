<template>
  <div
    :class="`posts__item posts__item--card posts__item--${
      news.tags && news.tags[0] ? getColor(news.tags[0]) : getColor()
    } posts__item--${
      news.tags && news.tags[0] ? getColor(news.tags[0]) : getColor()
    } card`"
  >
    <figure class="posts__thumb">
      <div class="posts__cat">
        <news-partial-tag v-for="tag in news.tags" :key="tag" :tag="tag" />
      </div>
      <nuxt-link
        :to="{
          name: 'news.view',
          params: { id: news.objectId, slug: news.slug },
        }"
        ><img :src="news.image ? news.image.url : ''" alt=""
      /></nuxt-link>
    </figure>
    <div class="posts__inner card__content">
      <nuxt-link
        :to="{
          name: 'news.view',
          params: { id: news.objectId, slug: news.slug },
        }"
        class="posts__cta"
      ></nuxt-link>
      <time
        :datetime="$moment(news.date.iso).format('YYYY-MM-DD')"
        class="posts__date"
        >{{ $moment(news.date.iso).format('Do MMMM YYYY') }}</time
      >
      <h6 class="posts__title posts__title--color-hover">
        <nuxt-link
          :to="{
            name: 'news.view',
            params: { id: news.objectId, slug: news.slug },
          }"
          >{{ news.title }}</nuxt-link
        >
      </h6>
      <div class="posts__excerpt">
        {{ $voca.truncate($voca.stripTags(news.text), 200, '...') }}
      </div>
    </div>
    <footer class="posts__footer card__footer">
      <div class="post-author">
        <figure class="post-author__avatar">
          <img
            :src="
              news.author && news.author.avatar && news.author.avatar.url
                ? news.author.avatar.url
                : '/images/esports/avatar-placeholder-80x80.jpg'
            "
            alt="Post Author Avatar"
          />
        </figure>
        <div class="post-author__info">
          <h4 class="post-author__name">{{ news.author.pseudo }}</h4>
        </div>
      </div>
      <ul class="post__meta meta">
        <li class="meta__item meta__item--views">
          {{ $numeral(news.views).format('0,0') }}
        </li>
      </ul>
    </footer>
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
