<template>
  <ul
    class="social-links social-links--inline social-links--main-nav social-links--top-bar"
  >
    <li
      v-for="social in socials"
      :key="social.title"
      class="social-links__item"
    >
      <a
        :href="social.link"
        class="social-links__link"
        data-toggle="tooltip"
        data-placement="bottom"
        title="Twitter"
        ><i :class="social.icon"></i
      ></a>
    </li>
  </ul>
</template>

<script>
import socials from '@/static/json/socials.json'

export default {
  data() {
    return {
      socials,
    }
  },
}
</script>
