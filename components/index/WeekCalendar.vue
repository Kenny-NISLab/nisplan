<template>
  <section class="h-16">
    <div class="flex justify-around mx-auto mb-2">
      <div v-for="(day, index) in Calendar" :key="index">
        <IndexDate :date="day.dates" :day="day.days" :index="index" />
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
