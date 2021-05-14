<template>
  <section>
    <div v-for="(day, week) in Calendar" :key="week">
      <div class="flex justify-around py-8 text-3xl">
        <h2 :id="day.days">
          <strong>{{ day.months }}/{{ day.dates }} {{ day.days }}</strong>
        </h2>
        <h2><strong>☀️27℃</strong></h2>
      </div>
      <div class="flex justify-around flex-wrap w-11/12 mx-auto">
        <template v-for="(student, index) in Students">
          <Student
            v-if="student.schedule.includes(day.schedule)"
            :id="student.id"
            :key="index"
            :index="index"
            :name="student.j_last_name + ' ' + student.j_first_name"
            :avatar="student.avatar"
          />
        </template>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    Students() {
      this.$store.state.students.forEach((student, index) => {
        if (!student.schedule) {
          this.$store.commit('setArray', index)
        }
      })
      return this.$store.state.students
    },
    Calendar() {
      return this.$store.state.calendar
    },
  },
}
</script>
