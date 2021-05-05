<template>
  <header class="flex justify-around p-4">
    <BackPage v-show="!defaultLayout" />
    <h1>
      <img
        src="@/assets/images/NISPLAN.png"
        alt="NISPLAN"
        class="w-48 max-w-full"
      />
    </h1>
    <Submit v-show="submitLayout" />
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
      if (this.$route.name === 'index') {
        this.defaultLayout = true
      } else {
        this.defaultLayout = false
      }
      if (this.$route.name === 'dates') {
        this.submitLayout = true
      } else {
        this.submitLayout = false
      }
    },
  },
}
</script>
