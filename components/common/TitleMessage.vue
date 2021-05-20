<template>
  <div class="text-center py-5 font-bold">
    <h2>{{ message }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true,
      default: 'No Message',
    },
  },
  mounted() {
    document.addEventListener('touchmove', this.handleTouchMove, {
      passive: false,
    })
  },
  methods: {
    handleTouchMove(event) {
      event.preventDefault()
    },
  },
}
</script>
