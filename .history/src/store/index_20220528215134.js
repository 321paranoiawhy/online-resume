import { createStore } from 'vuex'

export default createStore({
  state: {
    leftLine: 1,
    leftColumn: 0,
    rightLine: 1,
    rightColumn: 0,
    lineNumbersArray: [1],
  },
  getters: {
  },
  mutations: {
    // 左边 input 行数
    getLeftLine(state, data) {
      state.leftLine = data;
    },
    // 右边 当前列数
    getLeftColumn(state, data) {
      state.leftColumn = data;
    },
    // 右边 input 行数
    getRightLine(state, data) {
      state.rightLine = data;
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
