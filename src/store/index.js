import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  getters: {
    showNum:state=>{
      return "当前组件的值："+state.count
    }
  },
  mutations: {
    add(context) {
      context.count++
    },
    addN(context, step) {
      context.count += step
    },
    reduce(context) {
      context.count--
    },
    reduceN(context, step) {
      context.count -= step
    }
  },
  actions: {
    addSync(context) {
      setTimeout(() => {
        context.commit('add')
      }, 10000)
    },
    reduceSync(context) {
      setTimeout(() => {
        context.commit('reduce')
      }, 10000)
    }
  },
  modules: {}
})
