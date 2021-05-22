<template>
  <div class="w-full">
    <div class="bg-gray-300">
      <CommonTitleMessage message="Who are you?" />
    </div>
    <div
      ref="test"
      class="bg-white w-full test fixed overflow-y-scroll pb-2 mx-auto rounded-2xl"
      @touchmove="touchMove"
      @touchend="touchEnd"
    >
      <RegisterSelectStudents />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ store }) {
    await store.dispatch('getStudents')
    await store.dispatch('getCalendar')
  },
  mounted() {
    this.$store.commit('setCurrentPage', this.$route.path)
  },
  methods: {
    Redirect() {
      this.$router.push('/')
    },
    touchMove(event) {
      event.stopPropagation()
    },
    touchEnd(event) {
      event.preventDefault()
    },
  },
}
</script>
<style scoped>
.test {
  height: calc(100vh - 8rem);
}
</style>
