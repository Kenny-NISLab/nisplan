<template>
  <div>
    <IndexWeekCalendar class="bg-gray-300 fixed sec-top w-full" />
    <p class="h-32"></p>
    <div
      ref="test"
      class="bg-white w-full h-cal mx-auto pb-cal rounded-2xl overflow-y-scroll"
    >
      <CommonPostIcon class="fixed bottom-0 right-0 m-8" />
      <IndexListStudents />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ store }) {
    await store.dispatch('getStudents')
    await store.dispatch('getCalendar')
    await store.dispatch('getWeather')
  },
  data() {
    return {
      scroll: 0,
      tempActive: 0,
    }
  },
  computed: {
    Offset() {
      return this.$store.state.offset
    },
  },
  created() {
    this.$store.commit('setCurrentPage', this.$route.path)
  },
  mounted() {
    this.$refs.test.addEventListener('scroll', this.scrollWindow)
  },
  methods: {
    scrollWindow() {
      const scroll = this.$refs.test.scrollTop + 128
      let active = this.tempActive

      for (let i = 0; i <= 5; i++) {
        if (scroll < this.Offset[i + 1]) {
          active = i
          break
        }
      }

      if (scroll >= this.Offset[6]) {
        active = 6
      }

      if (this.tempActive !== active) {
        this.$store.commit('setActiveDate', active)
        this.tempActive = active
      }
    },
  },
}
</script>
<style scoped>
.sec-top {
  top: 64px;
}
.pb-cal {
  padding-bottom: calc(100vh - 14rem);
}
.h-cal {
  height: calc(100vh - 8rem);
}
</style>
