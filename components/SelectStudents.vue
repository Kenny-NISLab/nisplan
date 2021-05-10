<template>
  <section class="flex justify-around flex-wrap w-11/12 mx-auto pt-5">
    <div v-for="(student, index) in Students" :key="index">
      <div class="mr-1 mb-5">
        <img
          :src="student.avatar"
          :alt="student.name + 'のプロフィール画像'"
          class="block rounded-lg w-10 mx-auto"
        />
        <span>{{ student.j_last_name }}{{ student.j_first_name }}</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    Students() {
      return this.$store.state.students
    },
  },
}
</script>
