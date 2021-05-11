<template>
  <div class="py-12 text-center">
    <img
      :src="Student.avatar"
      :alt="Student.j_last_name + ' ' + Student.j_first_name"
      class="mx-auto rounded-full h-16 mb-4"
    />
    <span>{{ Student.j_last_name }}{{ Student.j_first_name }}</span>
  </div>
</template>

<script>
export default {
  computed: {
    Student() {
      return this.$store.state.reserved
    },
  },
}
</script>
