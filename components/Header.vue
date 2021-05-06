<template>
  <header class="flex justify-between items-center h-16 container mx-auto">
    <h1>
      <BackPage v-show="!defaultLayout" />
    </h1>
    <h1>
      <img
        src="@/assets/images/NISPLAN.png"
        alt="NISPLAN"
        class="w-48 max-w-full"
      />
    </h1>
    <h1>
      <Submit v-show="submitLayout" />
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
  mounted() {
    this.selectLayout()
  },
  methods: {
    selectLayout() {
      this.$route.name === 'index'
        ? (this.defaultLayout = true)
        : (this.defaultLayout = false)
      this.$route.name === 'dates'
        ? (this.submitLayout = true)
        : (this.submitLayout = false)
    },
  },
}
</script>
