<template>
  <div>
    <ListStudents />
  </div>
</template>

<script>
export default {
  computed: {
    Students() {
      return this.$store.state.students
    },
    Calendar() {
      return this.$store.state.calendar
    },
  },
  mounted() {
    this.$store.dispatch('getStudents')
    this.$store.dispatch('getCalendar')
  },
}
</script>
