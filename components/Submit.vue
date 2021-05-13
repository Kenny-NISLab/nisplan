<template>
  <button @click="SubmitSchedule">
    <nuxt-link to="/">
      <CheckSVG />
    </nuxt-link>
  </button>
</template>
<script>
import axios from 'axios'
export default {
  computed: {
    Scheduled() {
      return this.$store.state.schedule
    },
  },
  methods: {
    getData() {
      this.$store.dispatch('getStudents')
    },
    SubmitSchedule(id, Schedule) {
      if (!this.url.indexOf(this.$config.consoleUrl)) {
        this.loading = true
        axios
          .patch(
            this.$config.apiUrl + '/students/' + id,
            {
              schedule: Schedule,
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
      }
    },
  },
}
</script>
