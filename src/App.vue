<template>
  <div id="app">
    <!-- <h1>{{ count }}</h1>
      <p>{{ completedTodos }}</p>
      <h2>{{ completedTodosCount }}</h2>
    <h3> {{ getTodosById(2) }} </h3>-->

    <!-- mutations -->
    <span>{{ count }}</span>

    <button @click="decrementCountAsync({ amout: 1 })">-</button>
    <!-- <button @click="decrement({ amout: 1 })">-</button> -->
    
    <button @click="incrementCountAsync">+</button>
    <!-- <button @click="increment">+</button> -->

    <!-- fetchTodos -->
    <br>
    <br>
    <dir>{{ completedTodos }}</dir>

    <button @click="fetchTodos">Get</button>
  </div>
</template>

<script>

//getters 更改数据
//mutations 同步数据
//action 异步数据
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "app",
  components: {},
  computed: mapGetters([
    "count",
    "completedTodos",
    "completedTodosCount",
    "getTodosById",
    
  ]),
  // methods: mapMutations(['incrementCount','decrementCount'])

  methods: mapActions(['incrementCountAsync','decrementCountAsync','fetchTodos',''])
  // 复杂
  // methods: {
  //   increment(){
  //     // console.log(1);
  //     //触发mutation里面的方法
  //     // this.$store.commit('incrementCount');
  //     this.$store.dispatch('incrementCountAsync')
  //   },
  //   decrement(n){
  //     // console.log(0);
  //     // this.$store.commit('decrementCount', n)
  //     this.$store.dispatch('decrementCountAsync',n)
  //   },
  //   fetchTodos(){
  //     this.$store.dispatch('fetchTodos')
  //   }
  // }

  // getters & mapGetter
  // computed: {
  //   count(){
  //     return this.$store.getters.count;
  //   },
  //   completedTodos(){
  //     return this.$store.getters.completedTodos;
  //   },
  //   completedTodosCount(){
  //     return this.$store.getters.completedTodosCount;
  //   },
  //   getTodosById(){
  //     return this.$store.getters.getTodosById;
  //   }
  // }
  // state & mapState
  // computed:{
  //   count(){
  //    return this.$store.state.count;
  //   },
  //   todos(){
  //     return this.$store.state.todos;
  //   }
  // }
  // computed: mapState({
  //   count: state => state.count,
  //   todos: state => state.todos
  // })
  // computed: mapState(['count','todos']) //mapState方法省略获取方式 ，并不常用 无法操作数据
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
