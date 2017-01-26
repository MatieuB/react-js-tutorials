// import React from "react";
//
// import Todo from "/components/Todo";
// import * as TodoActions from "../actions/TodoActions"
// import TodoStore from "../stores/TodoStore";
//
//
// export default class Todos extends React.Component {
//   constructor(){
//     super()
//     this.state = {
//       todos: TodoStore.getAll()
//     }
//   }
//   componentWillMount(){
//     TodoStore.on('change',()=> {
//       this.setState({
//         todos:TodoStore.getAll(),
//       })
//     })
//   }
//   createTodo(){
//     const listItem = document.getElementById("todoInput").value;
//     console.log('listItem',listItem);
//   }
//   render(){
//     const {todos} = this.state;
//
//     const TodoComponents = todos.map(todo => {
//       return <Todo key={todo.id} {...todo}/>
//     })
//
//     return (
//       <div>
//         // <h1>HELLO?????</h1>
//         // <h1>WHAT???</h1>
//         // <input id="todoInput"type="text"/>
//         // <button onClick={this.createTodo.bind(this)}>ADD!</button>
//         // <ul>{TodoComponents}</ul>
//       </div>
//     )
//   }
// }
