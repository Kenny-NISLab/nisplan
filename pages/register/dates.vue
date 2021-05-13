<template>
  <div class="w-full h-full fixed">
    <div class="sticky top-auto bg-gray-300">
      <TitleMessage message="When will you come?" />
    </div>
    <div class="bg-white w-full h-full mx-auto rounded-2xl">
      <StudentIcon />
      <ListDates :reserved="ReservedStudent.schedule" />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    ReservedStudent() {
      return this.$store.state.reserved
    },
  },
  mounted() {
    this.$store.commit('setCurrentPage', this.$route.path)
    this.DeleteSchedule()
    this.setDB_Schedule(this.ReservedStudent)
  },
  methods: {
    setSchedule(student, index) {
      this.$store.commit('setSchedule', student.schedule, index)
    },
    DeleteSchedule() {
      this.$store.commit('deleteFullSchedule')
    },
    setDB_Schedule(student) {
      this.$store.commit('setDB_Schedule', student.schedule)
    },
  },
}
</script>
