<template>
  <div class="w-full">
    <div class="bg-gray-300">
      <TitleMessage message="Who are you?" />
    </div>
    <div
      class="bg-white w-full test fixed overflow-y-scroll pb-2 mx-auto rounded-2xl"
    >
      <SelectStudents />
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.commit('setCurrentPage', this.$route.path)
  },
}
</script>
<style scoped>
.test {
  height: calc(100vh - 8rem);
}
</style>
