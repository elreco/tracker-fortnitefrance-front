<template>
  <div>
    <loader-news-view v-if="$fetchState.pending && loaded" />
    <div v-else-if="!$fetchState.pending && loaded">
      <div
        class="page-heading page-heading--overlay page-heading--post-bg"
        :style="news.image && `background-image: url(${news.image.url})`"
      >
        <div class="container">
          <div class="row">
            <div class="col-md-6 offset-md-3">
              <div class="post__meta-block-wrapper">
                <div
                  class="
                    post__meta-block post__meta-block--top
                    posts__item--category-2
                  "
                >
                  <div class="post__category">
                    <news-tag v-for="tag in news.tags" :key="tag" :tag="tag" />
                  </div>
                  <h1 class="page-heading__title">
                    {{ news.title }}
                  </h1>
                  <ul class="post__meta meta">
                    <li class="meta__item meta__item--author">
                      <news-post-author
                        v-if="news.author"
                        :author="news.author"
                      />
                    </li>
                    <li class="meta__item meta__item--date">
                      <time
                        v-if="news.date"
                        :datetime="$moment(news.date.iso).format('YYYY-MM-DD')"
                        >{{
                          $moment(news.date.iso).format('Do MMMM YYYY')
                        }}</time
                      >
                    </li>
                    <li class="meta__item meta__item--views">
                      <span>
                        {{ $numeral(news.views).format('0a') }}
                      </span>
                    </li>
                  </ul>
                  <div class="post-sharing-compact">
                    <social-buttons />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="site-content">
        <div class="container">
          <div v-if="news.video" class="card mb-5">
            <div class="card__content">
              <div class="alc-video-player js-alc-video-player">
                <div class="alc-video-player__item">
                  <figure class="posts__thumb posts__thumb--video">
                    <a :href="news.video" class="mp_iframe"
                      ><img :src="news.image && news.image.url" alt=""
                    /></a>
                  </figure>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <adsense
                data-ad-client="pub-9253579683768027"
                data-ad-format="horizontal"
                data-ad-slot="5577404864"
                class="mb-3"
              >
              </adsense>
            </div>
          </div>
          <div class="row">
            <div class="content col-lg-6 offset-lg-3">
              <article class="post post--single">
                <h4 v-if="news.subtitle">{{ news.subtitle }}</h4>
                <div class="post__content" v-html="news.text"></div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SocialButtons from '@/components/global/SocialButtons'
import NewsTag from './partial/Tag'
import NewsPostAuthor from './partial/PostAuthor'
import LoaderNewsView from './loader/View'

export default {
  components: {
    NewsTag,
    NewsPostAuthor,
    SocialButtons,
    LoaderNewsView,
  },
  data() {
    return {
      news: {},
      loaded: false,
    }
  },
  jsonld() {
    return {
      '@context': 'https://schema.org',
      '@type': 'NewsArticle',
      headline: this.news.title,
      image: [this.news.image ? this.news.image.url : ''],
      datePublished: this.news.date ? this.news.date.iso : '',
    }
  },
  async fetch() {
    this.news = await this.getNews()
  },
  watch: {
    '$fetchState.pending'() {
      if (!this.$fetchState.pending) {
        if (
          this.$fetchState.error &&
          this.$fetchState.error.statusCode === 404
        ) {
          return this.$router.push({ name: 'news' })
        }
        if (this.news && this.news.video) {
          this.$initMpIframe()
        }
      }
    },
    news() {
      if (this.news && this.news.objectId) {
        this.addViews()
      }
    },
  },
  mounted() {
    setTimeout(() => (this.loaded = true), 250)
  },
  methods: {
    async getNews() {
      const params = {
        include: 'author',
      }
      const news = await this.$store.dispatch('news/get', {
        id: this.$route.params.id,
        params,
      })

      return news
    },
    addViews() {
      this.$store.dispatch('news/addView', this.news.objectId)
    },
  },
}
</script>
