<template>
  <div class="grid grid-cols-1 items-center justify-items-center variant">
    <div>
      <div v-for="(day, index) in Calendar" :key="index">
        <DateCheckDate
          :schedule="day.schedule"
          :days="day.months + '/' + day.dates + ' ' + day.days + '.'"
          :index="index"
        />
      </div>
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
  created() {
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
