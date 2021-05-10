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
      return tagColors[this.tag] ? tagColors[this.tag] : 'category-1'
    },
  },
}
</script>

<style></style>
