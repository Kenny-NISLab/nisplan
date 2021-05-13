<template>
  <div class="py-3">
    <label>
      <input
        type="checkbox"
        :checked="checked"
        :v-model="isChecked"
        @change="Checkflag(isChecked, schedule, index)"
      />
      <span class="text-xl">{{ schedule }}</span>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    schedule: {
      type: String,
      required: true,
      default: null,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      isChecked: false,
      checked: false,
    }
  },
  computed: {
    getPlan() {
      return this.$store.state.plans
    },
  },
  mounted() {
    this.isScheduled(this.getPlan, this.schedule)
  },
  methods: {
    isScheduled(plans, schedule) {
      if (plans[schedule]) this.checked = true
    },
    Checkflag(isChecked, schedule, index) {
      if (isChecked) {
        this.isChecked = false
        this.deleteSchedule(schedule, index)
      } else {
        this.isChecked = true
        this.setSchedule(schedule, index)
      }
    },
    setSchedule(schedule, index) {
      this.$store.commit('setSchedule', schedule, index)
    },
    deleteSchedule(schedule, index) {
      this.$store.commit('deleteSchedule', schedule, index)
    },
  },
}
</script>
