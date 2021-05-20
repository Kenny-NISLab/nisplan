<template>
  <header class="flex justify-between items-center h-16 container mx-auto">
    <h1 class="flex items-center h-full">
      <CommonBackPage v-show="getPage != '/'" class="absolute left-0 ml-2" />
    </h1>
    <h1>
      <img
        src="@/assets/images/NISPLAN.png"
        alt="NISPLAN"
        class="w-48 max-w-full"
      />
    </h1>
    <h1 class="flex items-center h-full">
      <CommonSubmit
        v-show="getPage == '/register/dates'"
        class="absolute right-0 mr-2"
      />
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
  mounted() {
    document.addEventListener('touchmove', this.handleTouchMove, {
      passive: false,
    })
  },
  methods: {
    handleTouchMove(event) {
      event.preventDefault()
    },
  },
}
</script>
