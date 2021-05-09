<template>
  <section class="h-14">
    <div class="flex justify-around mx-auto mb-1">
      <div v-for="(day, index) in Calendar" :key="index">
        <Date :date="day.dates" :day="day.days" />
      </div>
    </div>
  </section>
</template>

<script>
// import axios from 'axios'
export default {
  computed: {
    Calendar() {
      return this.$store.state.calendar
    },
  },
}
</script>
