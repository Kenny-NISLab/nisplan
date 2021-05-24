<template>
  <div class="w-full">
    <CommonTitleMessage
      message="When will you come?"
      class="bg-gray-300 fixed sec-top w-full"
    />
    <div
      class="bg-white w-full h-cal overflow-y-scroll mx-auto fixed thi-top pb-32 rounded-2xl"
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
.h-cal {
  height: calc(100vh - 8rem);
}
.sec-top {
  top: 64px;
}
.thi-top {
  top: 128px;
}
</style>
