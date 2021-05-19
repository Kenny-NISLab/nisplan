<template>
  <div class="bg-gray-300 dark:bg-red-300">
    <div class="stycky top-0 w-full">
      <CommonHeader />
    </div>
    <main>
      <Nuxt />
    </main>
  </div>
</template>

<script>
export default {
  // created() {
  //   this.$store.dispatch('getStudents')
  //   this.$store.dispatch('getCalendar')
  // },
  data() {
    return {
      theme: 'light',
      dark: true,
    }
  },
  mounted() {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
      this.theme = 'dark'
      this.dark = true
    } else {
      document.documentElement.classList.remove('dark')
      this.theme = 'light'
      this.dark = false
    }
  },
}
</script>
<style lang="postcss" scoped>
._theme-color {
  @apply bg-black;
}
</style>
