import React from 'react';
import './TodoList.css';
import TodoItem from './TodoItem';

const TodoList = ({todos, setTodos, tada}) => {

  return (
    <div>
      {/* {localStorage.getItem('todos').length >= 3 ? <h4>This is a list of your todos:</h4> : <h4>Your todo list is empty! Are you sure that there is nothing to do? Add some TODO, you lazy bitch! Please and thank you!</h4>} */}
      <div className="todo-list">
        {
        todos.map((todo) => (
          <TodoItem text={todo.text} key={todo.id} tada={todo.completed} todo={todo} todos={todos} setTodos={setTodos}/>
        ))
        }
      </div>
    </div>
  )
}

export default TodoList;
