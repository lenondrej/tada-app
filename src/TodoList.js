import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({todos, setTodos}) => {
  return (
    <div className="mt-12 text-center font-poppins h-screen flex flex-col place-items-center">
      <div className="mt-3 p-2.5">
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
      </div>
    </div>
  )
}

export default TodoList;
