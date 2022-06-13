import { createStore } from 'vuex'

export default createStore({
  state: {
    leftColumn: 0,
    rightColumn: 0,
  },
  getters: {
  },
  mutations: {

    // 右边 当前列数
    getLeftColumn(state, data) {
      state.leftColumn = data;
    },

    // 右边 当前列数
    getRightColumn(state, data) {
      state.rightColumn = data;
    },
    getLineNumbersArray(state, data) {
      state.lineNumbersArray = data;
      console.log(state.lineNumbersArray);
      console.log([...state.lineNumbersArray]);
    },
  },
  actions: {
  },
  modules: {
  }
})
