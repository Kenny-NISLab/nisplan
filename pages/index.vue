<template>
  <div>
    <IndexWeekCalendar
      :scroll="scrollMove"
      class="bg-gray-300 fixed sec-top w-full"
    />
    <p class="h-32"></p>
    <div
      ref="listheight"
      class="bg-white w-full h-cal mx-auto pb-cal rounded-2xl overflow-y-scroll"
    >
      <CommonPostIcon class="fixed bottom-0 right-0 m-8" />
      <IndexListStudents />
    </div>
  </div>
</template>

<script>
export default {
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
    this.$store.dispatch('getStudents')
    this.$store.dispatch('getCalendar')
    this.$store.dispatch('getWeather')
    this.$store.commit('setCurrentPage', this.$route.path)
  },
  mounted() {
    this.$store.commit('setActiveDate', 0)
    this.$refs.listheight.addEventListener('scroll', this.scrollWindow)
  },
  methods: {
    scrollWindow() {
      const scroll = this.$refs.listheight.scrollTop + 128
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
    scrollMove(index) {
      this.$refs.listheight.scrollTop = this.Offset[index] - 128
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
