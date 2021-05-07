<template>
  <div>
    <share-network
      network="facebook"
      :url="url"
      :title="title"
      :description="description"
      hashtags="fortnite,france,tracker,statistiques"
    >
      <a href="#" class="btn btn-default btn-sm btn-facebook btn-icon mr-2"
        ><i class="fab fa-facebook"></i
      ></a>
    </share-network>
    <share-network
      network="twitter"
      :url="url"
      :title="title"
      :description="description"
      hashtags="fortnite,france,tracker,statistiques"
    >
      <a href="#" class="btn btn-default btn-sm btn-twitter btn-icon"
        ><i class="fab fa-twitter"></i
      ></a>
    </share-network>
  </div>
</template>

<script>
export default {
  props: {
    description: {
      type: String,
      required: false,
      default: '',
    },
    title: {
      type: String,
      required: false,
      default: '',
    },
  },
  data() {
    return {
      url: process.env.baseUrl + this.$route.fullPath,
    }
  },
}
</script>
