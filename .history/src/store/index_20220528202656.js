import { createStore } from 'vuex'

export default createStore({
  state: {
    leftLine: 1,
    leftColumn: 0,
    rightLine: 1,
    rightColumn: 0,
  },
  getters: {
  },
  mutations: {
    getLeftLine(state, data) {
      state.leftLine = data;
    },
    getLeftColumn(state, data) {
      state.leftColumn = data;
    },
    getRightLine(state, data) {
      state.rightLine = data;
    },
    getRightColumn(state, data) {
      state.rightColumn = data;
    }
  },
  actions: {
  },
  modules: {
  }
})
