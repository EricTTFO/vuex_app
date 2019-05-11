const state = {
    count: 0,
}
const getters = {
    count: state => {
        //调用时只触发一次 每次调用都拿到原有的count值
        // return ++state.count;
        return state.count;
      },
}
const mutations = {
    incrementCount(state){
        state.count++;
      },
      decrementCount(state, payload) {
        state.count -= payload.amout;
      },
}
const actions = {
    incrementCountAsync({commit}){
        setTimeout(() =>{
          commit('incrementCount')
        },2000)
      },
      decrementCountAsync({commit},payload){
        setTimeout(() =>{
          commit('decrementCount',payload)
        },2000)
      },
}
export default {
    state,
    getters,
    mutations,
    actions
}