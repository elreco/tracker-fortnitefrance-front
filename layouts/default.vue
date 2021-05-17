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
        <stat-search class="header-search-form" />
      </div>

      <header class="header header--layout-3">
        <div class="header__top-bar clearfix">
          <div class="container">
            <div class="header__top-bar-inner">
              <social-bar />
              <ul class="nav-account">
                <template v-if="$cookies.get('auth._token.local')">
                  <li v-if="!$auth.loggedIn" class="nav-account__item">
                    <a href="#">Chargement...</a>
                  </li>
                  <template v-else>
                    <account-favorite-list-header />
                    <li class="nav-account__item has-children">
                      <nuxt-link :to="{ name: 'account' }"
                        >Bonjour,
                        <span class="highlight">{{
                          $auth.user.pseudo
                        }}</span></nuxt-link
                      >
                      <ul class="main-nav__sub">
                        <li>
                          <nuxt-link
                            class="router-link__toggle"
                            :to="{
                              name: 'account',
                            }"
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
                </template>
                <li v-else class="nav-account__item">
                  <nuxt-link class="router-link__toggle" :to="{ name: 'login' }"
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
                  <li :class="isRouteActive('index')">
                    <nuxt-link
                      class="router-link__toggle"
                      :to="{ name: 'index' }"
                      >Accueil</nuxt-link
                    >
                  </li>
                  <li :class="isRouteActive('news')" class="has-children">
                    <a href="#">Parcourir</a>
                    <ul class="main-nav__sub">
                      <li :class="isRouteActive('news')">
                        <nuxt-link
                          class="router-link__toggle"
                          :to="{ name: 'news' }"
                          >News</nuxt-link
                        >
                      </li>
                      <li class="">
                        <a href="#"
                          ><span
                            class="
                              mr-1
                              label
                              posts__cat-label posts__cat-label--category-4
                            "
                            >Bientôt</span
                          >
                          Classement
                        </a>
                      </li>
                      <li class="">
                        <a href="#"
                          ><span
                            class="
                              mr-1
                              label
                              posts__cat-label posts__cat-label--category-4
                            "
                            >Bientôt</span
                          >
                          Tournois</a
                        >
                      </li>
                      <li class="">
                        <a href="#"
                          ><span
                            class="
                              mr-1
                              label
                              posts__cat-label posts__cat-label--category-4
                            "
                            >Bientôt</span
                          >
                          Boutique</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a :href="discord.link">{{ discord.title }}</a>
                  </li>
                </ul>
              </nav>

              <div class="header__primary-spacer"></div>

              <stat-search class="header-search-form" />
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
                  :key="sponsor.title"
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
                                <router-link
                                  :to="{
                                    name: 'index',
                                  }"
                                  >Accueil</router-link
                                >
                              </li>
                              <li>
                                <a :href="discord.link">{{ discord.title }}</a>
                              </li>
                              <li>
                                <router-link
                                  :to="{
                                    name: 'login',
                                  }"
                                >
                                  Mon compte</router-link
                                >
                              </li>
                              <li>
                                <router-link
                                  :to="{
                                    name: 'legal-notice',
                                  }"
                                >
                                  Mentions légales</router-link
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
                :key="social.name"
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
import AccountFavoriteListHeader from '~/components/account/partial/FavoriteListHeader.vue'
import Toast from '~/components/global/Toast.vue'

export default {
  components: {
    SocialBar,
    StatSearch,
    AccountFavoriteListHeader,
  },
  data() {
    return {
      discord: socials.discord,
      socials,
      sponsors,
      contactMail: process.env.CONTACT_MAIL,
    }
  },
  mounted() {
    this.$nextTick(() => this.$initGlobalTheme())
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
    isRouteActive(name) {
      if (name === this.$route.name) {
        return 'active'
      }
    },
  },
}
</script>
