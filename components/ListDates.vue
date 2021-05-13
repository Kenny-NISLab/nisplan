<template>
  <div class="text-center">
    <div v-for="(day, index) in Calendar" :key="index">
      <CheckDate :schedule="day.schedule" :index="index" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    reserved: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      plans: {},
    }
  },
  computed: {
    Calendar() {
      return this.$store.state.calendar
    },
  },
  mounted() {
    this.Plans()
  },
  methods: {
    Plans() {
      for (let i = 0; i < 7; i++) {
        this.plans[this.Calendar[i].schedule] = null
      }
      this.reserved.forEach((isSchedule, index) => {
        this.plans[isSchedule] = isSchedule
      })
      this.$store.commit('setPlan', this.plans)
    },
  },
}
</script>
