import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class TodoStore extends EventEmitter {
  constructor() {
    super()
    this.todos = [
      {
        id: 113464613,
        text: "Go Shopping",
        complete: false
      },
      {
        id: 235684679,
        text: "Eat breakfast sandwhich",
        complete: false
      },
    ];
  }

  createTodo(text) {
    const id = Date.now();

    this.todos.push({
      id,
      text,
      complete: false,
    });
    //the component will receive the change
    this.emit("change");
  }

  getAll() {
    return this.todos;
  }
//this is the dispatcher
  handleActions(action) {
    console.log('todoStore recvd an action',action );
    switch(action.type) {
      case "CREATE_TODO": {
        this.createTodo(action.text);
        break;
      }
      case "RECEIVE_TODOS": {
        this.todos = action.todos;
        this.emit("change");
        break;
      }
    }
  }

}
//expose todstore globally to test methods
const todoStore = new TodoStore;
window.todoStore = todoStore;

// this registers the handle actions switch statement
//most impt dipatcher methods are 'register' and dispatch
dispatcher.register(todoStore.handleActions.bind(todoStore));
window.dispatcher = dispatcher;

export default todoStore;
