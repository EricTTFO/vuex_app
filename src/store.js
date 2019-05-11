import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    todos: [{
        id: 1,
        title: 'todo item 1',
        completed: true
      },
      {
        id: 2,
        title: 'todo item 2',
        completed: true
      },
      {
        id: 3,
        title: 'todo item 3',
        completed: false
      },
    ]
  },
  //原有的状态基础上 派生了一个新的状态
  getters: {
    count: state => {
      //调用时只触发一次 每次调用都拿到原有的count值
      // return ++state.count;
      return state.count;
    },
    completedTodos: state => {
      return state.todos.filter(todo => todo.completed)
    },
    completedTodosCount: (state,getters) => {
      return getters.completedTodos.length;
    },
    getTodosById: state => id => {
      return state.todos.find(todo => todo.id === id);
    }
  },
  mutations: {
    incrementCount(state){
      state.count++;
    },
    decrementCount(state, payload) {
      state.count -= payload.amout;
    }
  },
  actions: {

  }
})