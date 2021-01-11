import React from 'react';
import './TodoList.css';
import TodoItem from './TodoItem';

const TodoList = ({todos, setTodos}) => {
  return (
    <div>
      <h3>This is a list of todos:</h3>
      <ul>
        {
        todos.map((todo) => (
          <TodoItem text={todo.text} key={todo.id} tada={todo.completed} todo={todo} todos={todos} setTodos={setTodos}/>
        ))
        }
      </ul>
    </div>
  )
}

export default TodoList;
