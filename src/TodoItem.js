import React from 'react';
import './TodoItem.css'

const TodoItem = ({text, todo, tada, todos, setTodos}) => {

  const tadaHandler = () => {
    console.log(todo.id)

    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );

  };

  return(
    <div className="todo-item">
      <h5>👉🏻 {text}</h5>
      <div className="todo-info">
        {tada ? <p>🎉 you did it! 🎉</p> : <p>👷🏻‍♂️ this needs to be done 👷🏻‍♂️</p>}
        <button onClick={tadaHandler}>done?</button>
      </div>
    </div>
  );
}

export default TodoItem;
