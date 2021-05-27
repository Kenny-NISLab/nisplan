<template>
  <section class="h-16" @touchmove="touchMove">
    <div class="flex justify-around mx-auto mb-2">
      <div v-for="(day, index) in Calendar" :key="index">
        <IndexDate
          :date="day.dates"
          :day="day.days"
          :index="index"
          :scroll="scroll"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    scroll: {
      type: Function,
      required: true,
    },
  },
  computed: {
    Calendar() {
      return this.$store.state.calendar
    },
  },
  methods: {
    touchMove(event) {
      event.preventDefault()
    },
  },
}
</script>
