<template>
  <h3></h3>
</template>

<script>
// import axios from 'axios'
export default {
  computed: {
    Calendar() {
      return this.$store.state.calendar
    },
  },
}
</script>
