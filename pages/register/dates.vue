<template>
  <div>
    <div class="sticky top-0 bg-gray-300">
      <TitleMessage message="When will you come?" />
    </div>
    <div class="bg-white w-full mx-auto h-screen rounded-2xl">
      <StudentIcon class="mb-3" />
      <ListDates />
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
