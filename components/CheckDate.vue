<template>
  <div class="py-3">
    <input
      type="checkbox"
      :v-model="isChecked"
      @change="Checkflag(isChecked, schedule, index)"
    />
    <span class="text-xl">{{ schedule }}</span>
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
    }
  },
  methods: {
    Checkflag(isChecked, schedule, index) {
      if (isChecked) {
        this.isChecked = false
        this.deleteSchedule(index)
      } else {
        this.isChecked = true
        this.setSchedule(schedule, index)
      }
    },
    setSchedule(schedule, index) {
      this.$store.commit('setSchedule', schedule, index)
    },
    deleteSchedule(index) {
      this.$store.commit('deleteSchedule', index)
    },
  },
}
</script>
