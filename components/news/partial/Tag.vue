<template>
  <span :class="`label posts__cat-label posts__cat-label--${getColor()}`">{{
    tag.toUpperCase()
  }}</span>
</template>

<script>
import tagColors from '@/static/json/tag-colors.json'

export default {
  props: {
    tag: {
      type: String,
      required: true,
    },
  },
  methods: {
    getColor() {
      if (tagColors[this.tag]) {
        return tagColors[this.tag]
      } else {
        return 'category-1'
      }
    },
  },
}
</script>

<style></style>
