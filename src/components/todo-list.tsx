import { Component } from '@stencil/core';

@Component({
  tag: 'todo-list'
})

export class TodoList {
  // Indicate that name should be a public property on the component
  todos = [
    {taskName:"Task 1", isCompleted:true}, 
    {taskName:"Task 2", isCompleted:false}
  ];
  render() {
      return this.todos.map((todo: any) => {
      return (
          <div>
            <div>{todo.taskName}</div>
            <div>{todo.isCompleted}</div>
          </div>
      );
  });
  }
}