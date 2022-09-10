<template>
  <div class="v-logo">
    <img
      :src="src"
      :alt="alt"
      class="v-logo__image"
      @click="goTo(path)"
    >
  </div>
</template>

<script>
export default {
    name: 'VLogo',
    props: {
        src: {
            type: String,
            default: null
        },
        path: {
            type: String,
            default: '/'
        },
        alt: {
            type: String,
            default: 'logo'
        }
    },
    methods: {
        goTo (path) {
            location.href = path
        }
    }
}
</script>

<style scoped lang="scss">
.v-logo__image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
