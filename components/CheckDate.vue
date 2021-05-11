<template>
  <div class="py-3">
    <input type="checkbox" />
    <span class="text-xl">{{ schedule }}</span>
  </div>
</template>

<script>
export default {
  props: {
    schedule: {
      type: String,
      required: true,
      default: '2021-05-01',
    },
  },
}
</script>
