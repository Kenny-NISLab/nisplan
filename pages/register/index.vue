<template>
  <div>
    <div class="sticky top-0 bg-gray-300">
      <TitleMessage message="Who are you?" />
    </div>
    <div class="bg-white w-full mx-auto h-screen rounded-2xl z-0">
      <SelectStudents />
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
