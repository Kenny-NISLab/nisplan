<template>
  <div>
    <a :href="'#' + day" class="text-center">
      <span class="block text-xs mx-auto">{{ day }}</span>
      <span
        class="block w-6 rounded-full transition-all duration-500"
        :class="{ 'bg-primary': ActiveDate }"
        >{{ date }}</span
      >
    </a>
  </div>
</template>

<script>
export default {
  props: {
    day: {
      type: String,
      required: true,
      default: 'MON',
    },
    date: {
      type: String,
      required: true,
      default: '05/13',
    },
    index: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  computed: {
    ActiveDate() {
      return this.$store.state.activeDate[this.index]
    },
  },
}
</script>
