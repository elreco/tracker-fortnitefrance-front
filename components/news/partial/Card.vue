<template>
  <div
    :class="`posts__item posts__item--card posts__item--${getColor(
      news.tags[0]
    )} posts__item--${getColor(news.tags[0])} card`"
  >
    <figure class="posts__thumb">
      <div class="posts__cat">
        <news-partial-tag v-for="tag in news.tags" :key="tag" :tag="tag" />
      </div>
      <a href="_esports_blog-post-1.html"
        ><img :src="news.image ? news.image.url : ''" alt=""
      /></a>
    </figure>
    <div class="posts__inner card__content">
      <a href="_esports_blog-post-1.html" class="posts__cta"></a>
      <time
        :datetime="$moment(news.date.iso).format('YYYY-MM-DD')"
        class="posts__date"
        >{{ $moment(news.date.iso).format('Do MMMM YYYY') }}</time
      >
      <h6 class="posts__title posts__title--color-hover">
        <a href="_esports_blog-post-1.html">{{ news.title }}</a>
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
