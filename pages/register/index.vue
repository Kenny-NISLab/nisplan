<template>
  <div class="w-full">
    <CommonTitleMessage
      message="Who are you?"
      class="bg-gray-300 fixed sec-top w-full"
    />
    <div
      ref="test"
      class="bg-white w-full h-cal overflow-y-scroll mx-auto mt-32 rounded-2xl"
    >
      <RegisterSelectStudents />
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.commit('setCurrentPage', this.$route.path)
  },
  updated() {
    this.$store.dispatch('getStudents')
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
.b-bg::before {
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  content: '';
  background-color: #e2e8f0;
  @apply rounded-full;
}
</style>
