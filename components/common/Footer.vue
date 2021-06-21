<template>
  <footer>
    <p>{{ getTag }}</p>
  </footer>
</template>

<script>
export default {
  computed: {
    getTag() {
      return this.$store.state.release.tag_name
    },
  },
}
</script>
