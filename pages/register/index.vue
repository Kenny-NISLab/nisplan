<template>
  <div class="w-full h-full fixed">
    <div class="sticky top-auto bg-gray-300">
      <TitleMessage message="Who are you?" />
    </div>
    <div class="bg-white w-full h-full mx-auto rounded-2xl">
      <SelectStudents />
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('getStudents')
    this.$store.dispatch('getCalendar')
    this.$store.commit('setCurrentPage', this.$route.path)
  },
}
</script>
