<template>
  <div class="w-full h-screen">
    <div class="bg-gray-300">
      <WeekCalendar />
    </div>
    <div class="bg-white w-full mx-auto rounded-2xl h-full">
      <PostIcon class="fixed bottom-0 right-0 p-8" />
      <ListStudents />
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('getWeather')
    this.$store.commit('setCurrentPage', this.$route.path)
  },
}
</script>
