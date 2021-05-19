<template>
  <div class="w-full h-full">
    <div class="bg-gray-300">
      <CommonTitleMessage message="When will you come?" />
    </div>
    <div
      class="bg-white w-full h-screen test test fixed overflow-y-scroll pb-2 mx-auto rounded-2xl"
    >
      <DateStudentIcon />
      <DateListDates :reserved="ReservedSchedule" />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    ReservedSchedule() {
      return this.$store.state.reserved.schedule
    },
  },
  mounted() {
    if (this.ReservedSchedule[0] === '') return this.Redirect()
    this.$store.commit('setCurrentPage', this.$route.path)
  },
  methods: {
    Redirect() {
      this.$router.push('/')
    },
  },
}
</script>
<style scoped>
.test {
  height: calc(100vh - 8rem);
}
</style>
