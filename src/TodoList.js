import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({todos, setTodos, text}) => {
  return (
    <div className="mt-20 text-center">
      <h3 className="text-xl font-semibold">{text ? <p> This is a list of todos: </p> : <p> Your todo list is empty 😔 </p>}</h3>
      <ul className="mt-3 p-2.5">
        {
        todos.map((todo) => (
          <TodoItem text={todo.text}
                    key={todo.id}
                    tada={todo.completed}
                    todo={todo}
                    todos={todos}
                    setTodos={setTodos}
          />
        ))
        }
      </ul>
    </div>
  )
}

export default TodoList;
