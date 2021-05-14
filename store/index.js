export const state = () => ({
  students: [],
  calendar: [],
  reserved: [],
  plans: [],
  currentPage: '',
})

export const mutations = {
  // 全学生を格納
  setStudents(state, students) {
    state.students = students
  },
  // チェックボックス付けた日付を格納
  setSchedule(state, schedule) {
    state.reserved.schedule.push(schedule)
  },
  // チェックボックスを外したら日付を削除
  deleteSchedule(state, schedule) {
    state.reserved.schedule.forEach((isSchedule, index) => {
      if (isSchedule === schedule) state.reserved.schedule.splice(index, 1)
    })
  },
  // カレンダー格納
  setCalendar(state, calendar) {
    state.calendar = calendar
  },
  // 予約を行う生徒を格納
  setReserved(state, reserve) {
    state.reserved = reserve
  },
  // 配列の例外処理
  setArray(state, index) {
    state.students[index].schedule = []
  },
  // 現在開いているページpath格納
  setCurrentPage(state, currentPage) {
    state.currentPage = currentPage
  },
  // 連想配列で学生の予定を管理
  setPlan(state, plans) {
    state.plans = plans
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
            schedule: [],
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
