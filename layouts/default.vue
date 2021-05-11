<template>
  <body data-template="template-esports" class="page-loader-disable">
    <div class="site-wrapper clearfix">
      <div class="site-overlay"></div>

      <div id="header-mobile" class="header-mobile clearfix">
        <div class="header-mobile__logo">
          <nuxt-link :to="{ name: 'index' }"
            ><img
              src="/images/esports/logo-mini.png"
              srcset="/images/esports/logo-mini.png 2x"
              alt="Fortnite France Tracker Battle Royale"
              class="header-mobile__logo-img"
          /></nuxt-link>
        </div>
        <div class="header-mobile__inner">
          <a id="header-mobile__toggle" class="burger-menu-icon"
            ><span class="burger-menu-icon__line"></span
          ></a>
          <span
            id="header-mobile__search-icon"
            class="header-mobile__search-icon"
          ></span>
        </div>
      </div>

      <header class="header header--layout-3">
        <div class="header__top-bar clearfix">
          <div class="container">
            <div class="header__top-bar-inner">
              <social-bar />
              <ul class="nav-account">
                <template v-if="$auth.loggedIn">
                  <li class="nav-account__item has-children">
                    <nuxt-link :to="{ name: 'login' }"
                      >Bonjour,
                      <span class="highlight">{{
                        $auth.user.pseudo
                      }}</span></nuxt-link
                    >
                    <ul class="main-nav__sub">
                      <li>
                        <nuxt-link :to="{ name: 'account' }"
                          >Mon compte</nuxt-link
                        >
                      </li>
                    </ul>
                  </li>
                  <li class="nav-account__item nav-account__item--logout">
                    <a href="javascript:void()" @click="logout()"
                      >Déconnexion</a
                    >
                  </li>
                </template>
                <li v-else class="nav-account__item">
                  <nuxt-link :to="{ name: 'login' }"
                    >Connexion ou Inscription</nuxt-link
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="header__primary">
          <div class="container">
            <div class="header__primary-inner">
              <div class="header-logo">
                <nuxt-link :to="{ name: 'index' }">
                  <img
                    src="/images/esports/logo-tracker.png"
                    srcset="/images/esports/logo-tracker.png 2x"
                    alt="Logo Fortnite France"
                    class="header-logo__img"
                /></nuxt-link>
              </div>
              <nav class="main-nav">
                <ul class="main-nav__list">
                  <li :class="isRouteActive('/')">
                    <nuxt-link :to="{ name: 'index' }">Accueil</nuxt-link>
                  </li>
                  <li :class="isRouteActive('/news')">
                    <nuxt-link :to="{ name: 'news' }">News</nuxt-link>
                    <!-- <div class="main-nav__megamenu">
                      <div class="row">
                        <div class="col-12">
                          <div
                            class="widget widget--megamenu widget-latest-posts"
                          >
                            <div class="widget__content">
                              <ul
                                class="posts posts--simple-list posts-layout-horizontal posts-layout-horizontal--3cols"
                              >
                                <li class="posts__item posts__item--category-4">
                                  <figure
                                    class="posts__thumb posts__thumb--hover"
                                  >
                                    <a href="#"
                                      ><img
                                        src="/images/esports/samples/nav-post-img-1.jpg"
                                        alt=""
                                    /></a>
                                  </figure>
                                  <div class="posts__inner">
                                    <div class="posts__cat">
                                      <span
                                        class="label posts__cat-label posts__cat-label--category-4"
                                        >Xenowatch</span
                                      >
                                    </div>
                                    <h6
                                      class="posts__title posts__title--color-hover"
                                    >
                                      <a href="_esports_blog-post-1.html"
                                        >Xenowatch&#x27;s new patch will fix the
                                        faces bugs</a
                                      >
                                    </h6>
                                    <time
                                      datetime="2017-08-21"
                                      class="posts__date"
                                      >August 27th, 2018</time
                                    >
                                  </div>
                                </li>
                                <li class="posts__item posts__item--category-2">
                                  <figure
                                    class="posts__thumb posts__thumb--hover"
                                  >
                                    <a href="#"
                                      ><img
                                        src="/images/esports/samples/nav-post-img-2.jpg"
                                        alt=""
                                    /></a>
                                  </figure>
                                  <div class="posts__inner">
                                    <div class="posts__cat">
                                      <span
                                        class="label posts__cat-label posts__cat-label--category-2"
                                        >L.O. Heroes</span
                                      >
                                    </div>
                                    <h6
                                      class="posts__title posts__title--color-hover"
                                    >
                                      <a href="_esports_blog-post-1.html"
                                        >A new mage character is coming to the
                                        League</a
                                      >
                                    </h6>
                                    <time
                                      datetime="2017-08-21"
                                      class="posts__date"
                                      >July 16th, 2018</time
                                    >
                                  </div>
                                </li>
                                <li class="posts__item posts__item--category-3">
                                  <figure
                                    class="posts__thumb posts__thumb--hover"
                                  >
                                    <a href="#"
                                      ><img
                                        src="/images/esports/samples/nav-post-img-3.jpg"
                                        alt=""
                                    /></a>
                                  </figure>
                                  <div class="posts__inner">
                                    <div class="posts__cat">
                                      <span
                                        class="label posts__cat-label posts__cat-label--category-3"
                                        >Striker GO</span
                                      >
                                    </div>
                                    <h6
                                      class="posts__title posts__title--color-hover"
                                    >
                                      <a href="_esports_blog-post-1.html"
                                        >New Teach vehicles will be added in
                                        July&#x27;s patch</a
                                      >
                                    </h6>
                                    <time
                                      datetime="2017-08-21"
                                      class="posts__date"
                                      >June 12th, 2018</time
                                    >
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div class="w-100"></div>
                        <ul
                          class="col-lg-5 col-md-3 col-12 main-nav__ul main-nav__ul-3cols"
                        >
                          <li class="main-nav__title">Main Features</li>
                          <li>
                            <a href="_esports_features-shortcodes.html"
                              >Shortcodes</a
                            >
                          </li>
                          <li>
                            <a href="_esports_features-widgets-blog.html"
                              >Widgets - Blog</a
                            >
                          </li>
                          <li>
                            <a href="_esports_index.html">Home V1</a>
                          </li>
                          <li>
                            <a href="_esports_features-typography.html"
                              >Typography</a
                            >
                          </li>
                          <li>
                            <a href="_esports_features-widgets-sports.html"
                              >Widgets - eSports</a
                            >
                          </li>
                          <li>
                            <a href="_esports_index-2.html">Home V2</a>
                          </li>
                          <li>
                            <a href="_esports_features-404.html">404 Error</a>
                          </li>
                          <li>
                            <a href="_esports_features-widgets-shop.html"
                              >Widgets - Shop</a
                            >
                          </li>
                          <li></li>
                          <li>
                            <a href="_esports_features-search-results.html"
                              >Search Results</a
                            >
                          </li>
                          <li>
                            <a href="_esports_shop-login.html"
                              >Login/Register</a
                            >
                          </li>
                        </ul>
                        <ul
                          class="col-lg-3 col-md-3 col-12 main-nav__ul main-nav__ul-2cols"
                        >
                          <li class="main-nav__title">Blog Pages</li>
                          <li>
                            <a href="_esports_blog-1.html">News Page V1</a>
                          </li>
                          <li>
                            <a href="_esports_blog-post-1.html">Post Page V1</a>
                          </li>
                          <li>
                            <a href="_esports_blog-2.html">News Page V2</a>
                          </li>
                          <li>
                            <a href="_esports_blog-post-2.html">Post Page V2</a>
                          </li>
                          <li>
                            <a href="_esports_blog-3.html">News Page V3</a>
                          </li>
                          <li>
                            <a href="_esports_blog-post-3.html">Post Page V3</a>
                          </li>
                          <li>
                            <a href="_esports_blog-4.html">News Page V4</a>
                          </li>
                        </ul>
                        <ul class="col-lg-2 col-md-3 col-12 main-nav__ul">
                          <li class="main-nav__title">Other Pages</li>
                          <li>
                            <a href="_esports_page-sponsors.html">Sponsors</a>
                          </li>
                          <li>
                            <a href="_esports_page-faqs.html">FAQs</a>
                          </li>
                          <li>
                            <a href="_esports_page-contacts.html">Contacts</a>
                          </li>
                          <li>
                            <a href="_esports_features-404.html">404 Error</a>
                          </li>
                        </ul>
                        <ul class="col-lg-2 col-md-3 col-12 main-nav__ul">
                          <li class="main-nav__title">Headers</li>
                          <li>
                            <a href="_esports_features-typography.html"
                              >Header V1</a
                            >
                          </li>
                          <li>
                            <a href="_esports_features-shortcodes.html"
                              >Header V2</a
                            >
                          </li>
                        </ul>
                      </div>
                    </div> -->
                  </li>
                  <!-- <li>
                    <nuxt-link :to="{ name: 'index' }">Tournois</nuxt-link>
                  </li> -->
                  <li>
                    <a :href="discord.link">{{ discord.title }}</a>
                  </li>
                </ul>
              </nav>

              <div class="header__primary-spacer"></div>

              <div class="header-search-form">
                <stat-search />
              </div>
            </div>
          </div>
        </div>
      </header>
      <Nuxt />
      <footer id="footer" class="footer">
        <div class="sponsors-wrapper">
          <div class="container">
            <div class="sponsors">
              <ul class="sponsors-logos">
                <li
                  v-for="sponsor in sponsors"
                  :key="sponsor"
                  class="sponsors__item"
                >
                  <a :href="sponsor.link" target="_blank"
                    ><img class="img-sponsor" :src="sponsor.image" alt=""
                  /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-widgets effect-duotone effect-duotone--base">
          <div class="effect-duotone__layer">
            <div class="effect-duotone__layer-inner"></div>
          </div>
          <div class="footer-widgets__inner">
            <div class="container">
              <div class="row">
                <div class="col-12 col-sm-3 col-md-3">
                  <div class="footer-col-inner">
                    <aside class="widget widget--footer widget_nav_menu">
                      <h4 class="widget__title">Liens utiles</h4>
                      <div class="widget__content">
                        <div class="row">
                          <div class="col">
                            <ul class="widget__list">
                              <li>
                                <router-link :to="{ name: 'index' }"
                                  >Accueil</router-link
                                >
                              </li>
                              <li>
                                <a :href="discord.link">{{ discord.name }}</a>
                              </li>
                              <li>
                                <router-link :to="{ name: 'login' }">
                                  Mon compte</router-link
                                >
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </aside>
                  </div>
                </div>
                <div class="col-12 col-sm-5 col-md-5">
                  <div class="footer-col-inner">
                    <aside class="widget widget--footer widget_nav_menu">
                      <h4 class="widget__title">À Propos</h4>
                      <div class="widget__content">
                        <p>
                          Fortnite France est un site de statistiques pour
                          Fortnite non affilié à Epic Games. Retrouvez vos
                          statistiques en français et partagez-les à vos amis,
                          n'importe où sur internet et les réseaux sociaux.
                        </p>
                      </div>
                    </aside>
                  </div>
                </div>
                <div class="col-12 col-sm-4 col-md-4">
                  <div class="footer-col-inner">
                    <aside class="widget widget--footer widget_nav_menu">
                      <h4 class="widget__title">Serveur Discord</h4>
                      <div class="widget__content">
                        <p>
                          Pour rejoindre notre communauté ou pour poser vos
                          questions concernant les statistiques ou l'api, vous
                          pouvez rejoindre notre Discord !
                        </p>
                        <div class="mx-auto w-50">
                          <a :href="discord.link">
                            <img
                              src="/images/esports/discord.svg"
                              class="img-fluid"
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                    </aside>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="footer-social">
          <div class="container">
            <ul class="footer-social__list list-unstyled">
              <li
                v-for="social in socials"
                :key="social"
                class="footer-social__item"
              >
                <a :href="social.link" class="footer-social__link">
                  <span class="footer-social__icon">
                    <i :class="social.icon"></i>
                  </span>
                  <div class="footer-social__txt">
                    <span class="footer-social__name">{{ social.title }}</span>
                    <span class="footer-social__user">{{ social.name }}</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  </body>
</template>

<script>
import socials from '@/static/json/socials.json'
import sponsors from '@/static/json/sponsors.json'
import SocialBar from '~/components/global/SocialBar.vue'
import StatSearch from '~/components/stat/partial/Search.vue'
import Toast from '~/components/global/Toast.vue'

export default {
  components: {
    SocialBar,
    StatSearch,
  },
  data() {
    return {
      discord: socials.discord,
      socials,
      sponsors,
      contactMail: process.env.CONTACT_MAIL,
    }
  },
  fetchDelay: 2000,
  methods: {
    async logout() {
      await this.$store.dispatch('user/logout')
      await this.$auth.logout()
      this.$toast({
        component: Toast,
        props: {
          text: 'Vous êtes déconnecté !',
          type: 'success',
        },
      })
    },
    isRouteActive(path) {
      if (path === this.$route.path) {
        return 'active'
      }
    },
  },
}
</script>
