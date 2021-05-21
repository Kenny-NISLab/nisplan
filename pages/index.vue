<template>
  <div>
    <IndexWeekCalendar class="stycky top-0 w-full" />
    <div
      ref="test"
      class="bg-white w-full mx-auto rounded-2xl fixed overflow-y-scroll h-screen test"
      @touchmove="touchMove"
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
    this.$store.dispatch('getWeather')
    this.$store.commit('setCurrentPage', this.$route.path)
  },
  mounted() {
    this.$refs.test.addEventListener('touchmove', this.touchMove)
    this.$refs.test.addEventListener('scroll', this.scrollWindow)
  },
  methods: {
    scrollWindow() {
      let scroll = this.$refs.test.scrollTop
      const scrollheight = this.$refs.test.scrollHeight
      const clientheight = this.$refs.test.clientHeight
      scroll = 1
      let active = this.tempActive

      if (scroll === 0) {
        scroll = 1
      } else if (scroll + clientheight === scrollheight) {
        scroll = scroll - 1
      }

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
    touchMove(event) {
      let scrolltop = this.$refs.test.scrollTop
      const scrollheight = this.$refs.test.scrollHeight
      scrolltop = 1
      if (scrolltop !== 0 && scrolltop + scrollheight !== scrollheight) {
        event.stopPropagation()
      } else {
        event.preventDefault()
      }
    },
  },
}
</script>
<style scoped>
.test {
  padding-bottom: calc(100vh - 7rem);
}
</style>
