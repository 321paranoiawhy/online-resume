import { createStore } from 'vuex'

export default createStore({
  state: {
    // 示例
    example: 0,
    leftColumn: 0,
    rightColumn: 0,
    // 获取左侧 input textarea 编译后 HTML模板
    compiledHTML: "",
  },
  getters: {
  },
  mutations: {
    // 示例
    // 组件提交和获取前, 需
    // 1. import {useStore} from "vuex";
    // 2. const store = useStore();
    // 组件提交 store.commit("getExample",commitValue);
    // 组件获取 store.state.example
    // setup() 函数 最后 return {store}
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
    getCompiledHTML(state, data) {
      state.compiledHTML = data;
    }
  },
  actions: {
  },
  modules: {
  }
})
