<template>
  <div class="bg-gray-300">
    <div class="sticky top-0 bg-gray-300 z-10">
      <Header />
      <TitleMessage />
    </div>
    <main>
      <Nuxt />
    </main>
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
