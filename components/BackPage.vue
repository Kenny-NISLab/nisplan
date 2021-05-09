<template>
  <nuxt-link :to="prevRoute">
    <LeftArrowSVG />
  </nuxt-link>
</template>

<script>
export default {
  data() {
    return {
      prevRoute: '',
    }
  },
  mounted() {
    this.getRoute()
  },
  methods: {
    getRoute() {
      this.$route.path === '/register'
        ? (this.prevRoute = '/')
        : (this.prevRoute = '/register')
    },
  },
}
</script>
