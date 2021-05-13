<template>
  <section class="fixed w-full flex justify-around flex-wrap mx-auto pt-12">
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
      return this.$store.state.students
    },
  },
  methods: {
    setReserve(student, id) {
      this.$store.commit('setReserved', student, id)
    },
  },
}
</script>
