import Vuex from 'vuex';
import Vue from 'vue';
import count from './modules/count';
import todos from './modules/todos';
Vue.use(Vuex);
export default new Vuex.Store({
    //状态分成2个
    modules: {
        count,
        todos
    }
})