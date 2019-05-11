const state = {
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
}
const getters = {
    completedTodos: state => {
        return state.todos.filter(todo => todo.completed)
      },
      completedTodosCount: (state,getters) => {
        return getters.completedTodos.length;
      },
      getTodosById: state => id => {
        return state.todos.find(todo => todo.id === id);
      }
}
const mutations = {
    setTodos: (state,todos) => (state.todos = todos)
}
const actions = {

    //当前函数属于异步请求
    //es7提供的异步方法
    async fetchTodos({ commit }){
        //await 执行完后面的才能执行接下来的
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        console.log(response);
        commit('setTodos', response.data)
      }
}
export default {
    state,
    getters,
    mutations,
    actions
}