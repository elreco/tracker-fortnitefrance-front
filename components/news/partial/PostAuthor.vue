<template>
  <div class="post-author">
    <figure class="post-author__avatar">
      <img
        :src="
          author && author.avatar && author.avatar.url
            ? author.avatar.url
            : '/images/esports/avatar-placeholder-80x80.jpg'
        "
        alt="Post Author Avatar"
      />
    </figure>
    <div class="post-author__info">
      <h4 class="post-author__name">{{ author.pseudo }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    author: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style></style>
