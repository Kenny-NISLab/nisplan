<template>
  <div>
    <a :href="'#' + day" class="text-center">
      <span class="block text-xs mx-auto">{{ day }}</span>
      <span class="block w-6 rounded-full">{{ date }}</span>
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
      type: Number,
      required: true,
      default: 0,
    },
  },
}
</script>
