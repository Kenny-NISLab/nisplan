export const state = () => ({
  students: [],
  calendar: [],
})

export const mutations = {
  setStudents(state, students) {
    state.students = students
  },
  setCalendar(state, calendar) {
    state.calendar = calendar
  },
}

// export const getters = {
//   getStudents(state) {
//     return state.students.length
//   },
//   getCalendar(state) {
//     return state.updatedWeek.Items
//   },
// }

export const actions = {
  async getStudents({ commit, $config }) {
    await this.$axios
      .get(this.$config.apiUrl + '/students', {
        headers: { 'x-api-key': this.$config.apiKey },
      })
      .then((res) => {
        commit('setStudents', res.data.Items)
      })
      .catch(
        commit(
          'setStudents',
          Array(23).fill({
            id: 0,
            j_last_name: 'Not',
            j_first_name: 'Found',
            avatar: require('@/assets/images/defaultAvatar.jpg'),
            is_stay: false,
          })
        )
      )
  },
  getCalendar({ commit }) {
    const Array = []
    for (let i = 0; i < 8; i++) {
      Array[i] = {
        dates: this.$moment().add(i, 'days').format('MM/DD'),
        days: this.$moment().add(i, 'days').format('ddd'),
      }
    }
    commit('setCalendar', Array)
  },
}
