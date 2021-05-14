<template>
  <div v-if="news && !$fetchState.pending">
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
                      >{{ $moment(news.date.iso).format('Do MMMM YYYY') }}</time
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
            <adsense data-ad-client="pub-9253579683768027" class="mb-3">
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
    <!-- <div class="section section--bg1">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 offset-lg-3">
            <div class="post-comments">
              <header class="post-commments__header">
                <h4>18 Comments</h4>
              </header>
              <div class="post-comments__content">
                <ul class="comments comments--alt">
                  <li class="comments__item">
                    <div class="comments__inner">
                      <header class="comment__header">
                        <div class="comment__author">
                          <figure
                            class="comment__author-avatar comment__author-avatar--md"
                          >
                            <img
                              src="assets/images/samples/avatar-8.jpg"
                              alt=""
                            />
                          </figure>
                        </div>
                      </header>
                      <div class="comment__inner-wrap">
                        <div class="comment__author-info">
                          <h5 class="comment__author-name">Robert Stark</h5>
                          <time class="comment__post-date" datetime="2017-08-23"
                            >5 minutes ago</time
                          >
                        </div>
                        <div class="comment__body">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris.
                        </div>
                        <div class="comment__reply">
                          <a href="#" class="comment__reply-link">Reply</a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="comments__item">
                    <div class="comments__inner">
                      <header class="comment__header">
                        <div class="comment__author">
                          <figure
                            class="comment__author-avatar comment__author-avatar--md"
                          >
                            <img
                              src="assets/images/samples/avatar-2.jpg"
                              alt=""
                            />
                          </figure>
                        </div>
                      </header>
                      <div class="comment__inner-wrap">
                        <div class="comment__author-info">
                          <h5 class="comment__author-name">Samantha Rodgers</h5>
                          <time class="comment__post-date" datetime="2017-08-23"
                            >27 minutes ago</time
                          >
                        </div>
                        <div class="comment__body">
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta sunt
                          explicabo. Nemo enim ipsam tatem quia voluptas sit
                          aspernatur aut odit aut fugit, sed quia consequuntur
                          magni dolores eos qui ratione.
                        </div>
                        <div class="comment__reply">
                          <a href="#" class="comment__reply-link">Reply</a>
                        </div>
                      </div>
                    </div>
                    <ul class="comments--children">
                      <li class="comments__item">
                        <div class="comments__inner">
                          <header class="comment__header">
                            <div class="comment__author">
                              <figure
                                class="comment__author-avatar comment__author-avatar--md"
                              >
                                <img
                                  src="assets/images/samples/avatar-6.jpg"
                                  alt=""
                                />
                              </figure>
                            </div>
                          </header>
                          <div class="comment__inner-wrap">
                            <div class="comment__author-info">
                              <h5 class="comment__author-name">Lagertha Dax</h5>
                              <time
                                class="comment__post-date"
                                datetime="2017-08-23"
                                >29 mins ago</time
                              >
                            </div>
                            <div class="comment__body">
                              Excepteur sint occaecat cupidatat non proident,
                              sunt in culpa qui officia deserunt mollit anim id
                              est laborum. Sectetur, adipisci velit, sed quia
                              non numquam eius modi tempora.
                            </div>
                            <div class="comment__reply">
                              <a href="#" class="comment__reply-link">Reply</a>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li class="comments__item">
                    <div class="comments__inner">
                      <header class="comment__header">
                        <div class="comment__author">
                          <figure
                            class="comment__author-avatar comment__author-avatar--md"
                          >
                            <img
                              src="assets/images/esports/samples/avatar-14-md.jpg"
                              alt=""
                            />
                          </figure>
                        </div>
                      </header>
                      <div class="comment__inner-wrap">
                        <div class="comment__author-info">
                          <h5 class="comment__author-name">
                            Alexander Stevens
                          </h5>
                          <time class="comment__post-date" datetime="2017-08-23"
                            >6 days ago</time
                          >
                        </div>
                        <div class="comment__body">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris.
                        </div>
                        <div class="comment__reply">
                          <a href="#" class="comment__reply-link">Reply</a>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <footer class="post__comments-load-more">
                <div class="row">
                  <div class="col-lg-8 offset-lg-2">
                    <button class="btn btn-primary btn-block">
                      Load More Comments (14)
                    </button>
                  </div>
                </div>
              </footer>
            </div>
            <div class="spacer-lg"></div>
            <div class="post-comment-form">
              <header class="post-comment-form__header">
                <h4>Write a Comment</h4>
              </header>
              <div class="post-comment-form__content">
                <form action="#" class="comment-form">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="control-label" for="input-name"
                          >Your Name <span class="required">*</span></label
                        >
                        <input
                          id="input-name"
                          type="text"
                          name="input-name"
                          class="form-control"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="control-label" for="input-email"
                          >Your Email <span class="required">*</span></label
                        >
                        <input
                          id="input-email"
                          type="email"
                          name="input-email"
                          class="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="control-label" for="textarea-comment"
                      >Your Comment <span class="required">*</span></label
                    >
                    <textarea
                      id="textarea-comment"
                      name="textarea-comment"
                      rows="4"
                      class="form-control"
                    ></textarea>
                  </div>
                  <div class="form-group mb-0 text-right">
                    <button type="submit" class="btn btn-primary-inverse">
                      Post Your Comment
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import SocialButtons from '@/components/global/SocialButtons'
import NewsTag from './partial/Tag'
import NewsPostAuthor from './partial/PostAuthor'

export default {
  components: {
    NewsTag,
    NewsPostAuthor,
    SocialButtons,
  },
  data() {
    return {
      news: {},
    }
  },
  async fetch() {
    this.news = await this.getNews()
  },
  watch: {
    '$fetchState.pending'() {
      if (!this.$fetchState.pending) {
        this.$nextTick(() => this.$initMpIframe())
      }
    },
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
      await this.$store.dispatch('news/addView', news.objectId)
      return news
    },
  },
}
</script>
