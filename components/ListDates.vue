<template>
  <div class="text-center">
    <div v-for="(day, index) in Calendar" :key="index">
      <CheckDate :schedule="day.schedule" />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    Calendar() {
      return this.$store.state.calendar
    },
  },
}
</script>
