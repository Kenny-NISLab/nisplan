export const state = () => ({
  students: [],
  calendar: [],
  reserved: [],
  currentPage: '',
})

export const mutations = {
  setStudents(state, students) {
    state.students = students
  },
  setCalendar(state, calendar) {
    state.calendar = calendar
  },
  setReserved(state, reserve) {
    state.reserved = reserve
  },
  setCurrentPage(state, currentPage) {
    state.currentPage = currentPage
  },
}

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
    for (let i = 0; i < 7; i++) {
      Array[i] = {
        year: this.$moment().add(i, 'days').format('YY'),
        months: this.$moment().add(i, 'days').format('MM'),
        dates: this.$moment().add(i, 'days').format('DD'),
        days: this.$moment().add(i, 'days').format('ddd'),
        schedule: this.$moment().add(i, 'days').format('YYYY-MM-DD'),
      }
    }
    commit('setCalendar', Array)
  },
}
