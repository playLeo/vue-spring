<template>
  <div id="app">
    <div class="contatiner">
      <div class="col-md-6 offset-md-3">
        <h1 class="text-center mb-4" >Todo List</h1>
        <input type="text" class="form-control" v-model="userInput" @keydown.enter="addlist">
        
        <div class="list-group mb-4">
          <template v-for="todo in activeTodoList" >
            <!-- <todo :key="todo">
                :label="todo.label"
                @componentClick="toggleTodoState(todo)"
            </todo> -->
            <button type="button" class="list-group-item text-left" @click="toggleTodoState()" :key="todo">
                {{ todo.label }}
            </button>

          </template>
        </div>

        <div class="text-right">
          <button type="button" class="btn btn-sm" @click="changeCurrentState('active')">할 일</button>
          <button type="button" class="btn btn-sm" @click="changeCurrentState('done')">완료</button>
          <button type="button" class="btn btn-sm" @click="changeCurrentState('whole')">전체</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Todo from './components/Todo';

export default {
  name: 'App',
  data(){
    return{
      userInput : '',
      todoList: [],
      currentState : "active"
    };
  },
  computed: {
     activeTodoList(){
      return this.todoList.filter(todo => this.currentState ==='whole' || todo.state === this.currentState);
    }
  },
  methods:{
    addlist(){
      this.todoList.push({
        label: this.userInput,
        state:'active'
      });
      this.userInput = '';
    },
    toggleTodoState(todo){
      todo.state = todo.state === 'active' ? 'done' : 'active'
    },
    changeCurrentState(state){
      this.currentState = state;
    }
  },
  components:{
    Todo
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
