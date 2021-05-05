<template>
  <section>
    <div class="flex justify-around pt-8 text-3xl">
      <h2><strong>5/12 Mon</strong></h2>
      <h2><strong>☀️27℃</strong></h2>
    </div>
    <div class="flex justify-around flex-wrap w-9/12 mx-auto">
      <template v-for="(student, index) in updatedStudents">
        <Student
          :id="student.id"
          :key="index"
          :index="index"
          :name="student.j_last_name + ' ' + student.j_first_name"
          :avatar="student.avatar"
        />
      </template>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    students: {
      type: Array,
      required: true,
      default: () =>
        Array(23).fill({
          id: 0,
          j_last_name: 'Not',
          j_first_name: 'Found',
          avatar: '@/assets/images/defaultAvatar.jpg',
          is_stay: false,
        }),
    },
  },
  data() {
    return {
      updatedStudents: this.students,
    }
  },
}
</script>
