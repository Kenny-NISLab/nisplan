<template>
  <button @click="SubmitSchedule(Scheduled)">
    <nuxt-link to="/">
      <CommonCheckSVG />
    </nuxt-link>
  </button>
</template>
<script>
import axios from 'axios'
export default {
  computed: {
    Scheduled() {
      return this.$store.state.reserved
    },
  },
  methods: {
    getData() {
      this.$store.dispatch('getStudents')
    },
    SubmitSchedule(Student) {
      axios
        .patch(
          this.$config.apiUrl + '/students/' + Student.id,
          {
            schedule: Student.schedule,
          },
          {
            headers: { 'x-api-key': this.$config.apiKey },
          }
        )
        .then(() => {
          this.getData()
        })
        .catch((error) => {
          alert(error)
        })
    },
  },
}
</script>
