import React from 'react';
import './TodoList.css';
import TodoItem from './TodoItem';

const TodoList = ({todos, setTodos, tada}) => {
  return (
    <div>
      {tada ? <h4>This is a list of todos:</h4> : <h4>Your todo list is empty! Are you sure that there is nothing to do?</h4>}
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
