<template>
  <header class="flex justify-between items-center h-16 container mx-auto">
    <h1>
      <BackPage v-show="getPage != '/'" />
    </h1>
    <h1>
      <img
        src="@/assets/images/NISPLAN.png"
        alt="NISPLAN"
        class="w-48 max-w-full"
      />
    </h1>
    <h1>
      <Submit v-show="getPage == '/register/dates'" />
    </h1>
  </header>
</template>

<script>
export default {
  data() {
    return {
      defaultLayout: true,
      submitLayout: true,
    }
  },
  computed: {
    getPage() {
      return this.$store.state.currentPage
    },
  },
}
</script>
