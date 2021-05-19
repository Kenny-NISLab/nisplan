<template>
  <nuxt-link :to="getRoute">
    <CommonLeftArrowSVG />
  </nuxt-link>
</template>

<script>
export default {
  computed: {
    getRoute() {
      let prevRoute = ''
      this.$store.state.currentPage === '/register'
        ? (prevRoute = '/')
        : (prevRoute = '/register')
      return prevRoute
    },
  },
}
</script>
