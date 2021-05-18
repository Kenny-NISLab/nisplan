<template>
  <section
    class="w-full grid grid-cols-3 md:grid-cols-6 row-gap-4 md:row-gap-8 items-center justify-items-center mx-auto pt-12"
  >
    <div v-for="(student, index) in Students" :key="index">
      <div class="mb-3 mx-2">
        <button @click="setReserve(student, index)">
          <nuxt-link to="register/dates">
            <img
              :src="student.avatar"
              :alt="student.name + 'のプロフィール画像'"
              class="block rounded-lg w-10 mx-auto"
            />
            <span>{{ student.j_last_name }} {{ student.j_first_name }}</span>
          </nuxt-link>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    Students() {
      const Students = JSON.parse(JSON.stringify(this.$store.state.students))
      return Students
    },
  },
  methods: {
    setReserve(student) {
      this.$store.commit('setReserved', student)
    },
  },
}
</script>
