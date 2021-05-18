export const state = () => ({
  students: [],
  calendar: [],
  reserved: { schedule: [''] },
  plans: [],
  currentPage: '',
  weather: Array(7).fill({
    temp: {
      min: 290,
      max: 300,
    },
    weather: [
      {
        icon: '04d',
      },
    ],
  }),
  offset: [0, 0, 0, 0, 0, 0, 0],
  activeDate: [true, false, false, false, false, false, false],
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
  setWeather(state, weather) {
    state.weather = weather
  },
  setOffset(state, { offset, index }) {
    state.offset[index] = offset
  },
  setActiveDate(state, active) {
    for (const index in state.activeDate) {
      state.activeDate.splice(index, 1, false)
    }
    state.activeDate.splice(active, 1, true)
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
  async getWeather({ commit }) {
    const url =
      this.$config.weather_apiUrl +
      '?lat=34.8011257' +
      '&lon=135.7684062' +
      '&exclude=current,minutely,hourly,alerts&appid=' +
      this.$config.weather_apiKey
    await this.$axios
      .get(url)
      .then((res) => {
        commit('setWeather', res.data.daily)
      })
      .catch((er) => {
        commit('setWeather', [])
      })
  },
}
