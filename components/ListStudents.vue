<template>
  <section>
    <div v-for="(day, cnt) in Calendar" :key="cnt">
      <div class="flex justify-around py-8 text-3xl">
        <h2 :id="day.days">
          <strong>{{ day.months }}/{{ day.dates }} {{ day.days }}</strong>
        </h2>
        <h2>
          <strong>{{}}</strong>
        </h2>
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
    <h1>{{ Weather2[0] }}</h1>
  </section>
</template>

<script>
export default {
  data() {
    return {
      Weather: [
        {
          dt: 1621044000,
          sunrise: 1621022047,
          sunset: 1621072356,
          moonrise: 1621029780,
          moonset: 1621083900,
          moon_phase: 0.1,
          temp: {
            day: 300.21,
            min: 291.25,
            max: 300.88,
            night: 293.05,
            eve: 295.44,
            morn: 291.25,
          },
          feels_like: { day: 300.69, night: 291.33, eve: 295.27, morn: 291.33 },
          pressure: 1015,
          humidity: 51,
          dew_point: 289.2,
          wind_speed: 4.63,
          wind_deg: 114,
          wind_gust: 9.28,
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'overcast clouds',
              icon: '04d',
            },
          ],
          clouds: 100,
          pop: 0.36,
          uvi: 7.22,
        },
      ],
    }
  },
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
    Weather2() {
      return this.$store.state.weather
    },
  },
}
</script>
