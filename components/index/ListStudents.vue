<template>
  <section>
    <div v-for="(day, cnt) in Calendar" ref="list" :key="cnt" class="mb-8">
      <div class="flex justify-around pt-8 pb-2 text-2xl">
        <h2 :id="day.days" class="font-semibold">
          {{ day.months }}/{{ day.dates }}
          <span class="text-base">{{ day.days }}.</span>
        </h2>
        <h3 class="text-base">
          <img
            :src="`http://openweathermap.org/img/wn/${Weather[cnt].weather[0].icon}.png`"
            alt="wether"
            class="inline-block"
          />
          <strong
            >{{ Math.round(Weather[cnt].temp.max - 273.15) }}/{{
              Math.round(Weather[cnt].temp.min - 273.15)
            }}℃</strong
          >
        </h3>
      </div>
      <div
        class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 items-center w-5/6 mx-auto row-gap-4 md:row-gap-8"
      >
        <template v-for="(student, index) in Students">
          <IndexStudent
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
    <!-- <h1 v-if="Weather2[0]">{{ Weather2[0].temp.min }}</h1> -->
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
    Weather() {
      return this.$store.state.weather
    },
  },
  created() {
    this.$store.dispatch('getWeather')
    this.$store.commit('setCurrentPage', this.$route.path)
  },
  updated() {
    for (const index in this.Calendar) {
      this.$store.commit('setOffset', {
        offset: this.$refs.list[index].offsetTop,
        index,
      })
    }
  },
}
</script>
