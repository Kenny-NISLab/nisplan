<template>
  <header
    class="flex justify-between items-center h-16 container mx-auto"
    @touchmove="touchMove"
  >
    <h2 class="flex items-center h-full">
      <CommonBackPage v-show="getPage != '/'" class="absolute left-0 ml-2" />
    </h2>
    <div role="button">
      <nuxt-link to="/">
        <img
          src="@/assets/images/NISPLAN.png"
          alt="NISPLAN"
          class="w-48 max-w-full"
        />
      </nuxt-link>
    </div>
    <h2 class="flex items-center h-full">
      <CommonSubmit
        v-show="getPage == '/register/dates'"
        class="absolute right-0 mr-2"
      />
    </h2>
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
  methods: {
    touchMove(event) {
      event.preventDefault()
    },
  },
}
</script>
