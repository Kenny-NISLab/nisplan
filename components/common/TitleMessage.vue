<template>
  <div class="text-center py-5 font-bold" @touchmove="touchMove">
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
  methods: {
    touchMove(event) {
      event.preventDefault()
    },
  },
}
</script>
