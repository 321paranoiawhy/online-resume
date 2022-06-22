import { createStore } from 'vuex'

export default createStore({
  state: {
    // 示例
    // example: 0,
    Fn: "",
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
    // setup() 函数 最后 return {store} (不是必须的)

    // 也可全局变量获取: $store.state.example
    // getExample(state, data) {
    //   state.example = data;
    // },
    getFn(state, data) {
      state.Fn = data;
      // console.log(state.Fn);
    }
  },
  actions: {
  },
  modules: {
  }
})
