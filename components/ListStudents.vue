<template>
  <section>
    <div v-for="day in Calendar" :key="day">
      <div class="flex justify-around pt-8 text-3xl">
        <h2>
          <strong>{{ day.dates }} {{ day.days }}</strong>
        </h2>
        <h2><strong>☀️27℃</strong></h2>
      </div>
      <div class="flex justify-around flex-wrap w-9/12 mx-auto">
        <template v-for="(student, index) in Students">
          <Student
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
      return this.$store.state.students
    },
    Calendar() {
      return this.$store.state.calendar
    },
  },
}
</script>
