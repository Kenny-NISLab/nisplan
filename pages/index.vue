<template>
  <div>
    <div class="sticky top-0 bg-gray-300">
      <WeekCalendar />
    </div>
    <div
      class="bg-white w-full mx-auto rounded-2xl h-screen fixed overflow-scroll pb-32"
    >
      <PostIcon class="fixed bottom-0 right-0 p-8" />
      <ListStudents />
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('getStudents')
    this.$store.dispatch('getCalendar')
  },
}
</script>
