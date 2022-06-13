import { createStore } from 'vuex'

export default createStore({
  state: {
    example: 0,
    leftColumn: 0,
    rightColumn: 0,
  },
  getters: {
  },
  mutations: {
    // 组件提交 store.commit("getExample",)
    getExample(state, data) {
      state.example = data;
    },
    // 右边 当前列数
    // 组件提交 store.commit("getLeftColumn")
    getLeftColumn(state, data) {
      state.leftColumn = data;
    },
    // 右边 当前列数
    getRightColumn(state, data) {
      state.rightColumn = data;
    },
  },
  actions: {
  },
  modules: {
  }
})
