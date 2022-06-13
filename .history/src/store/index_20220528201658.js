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
    getLeftLine(state) {
      state.leftLine = state;
    },
    getLeftColumn(state) {
      state.leftColumn = state;
    },
    getRightLine(state) {
      state.rightLine = state;
    },
    getRightColumn(state) {
      state.rightColumn = state;
    }
  },
  actions: {
  },
  modules: {
  }
})
