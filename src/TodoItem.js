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

  const deleteHandler = (event) => {

    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            isPublic: !item.isPublic
          };
        }
        return item;
      })
    );

  };

  const clearStorage = () => {
    setTodos([])
  };

  return(
    <div className="todo-item">
      <div className="todo-content">
        <h5>👉🏻 {text}</h5>
        {tada ? <p>🎉 you did it! 🎉</p> : <p>👷🏻‍♂️ this needs to be done 👷🏻‍♂️</p>}
      </div>

    <div className="todo-buttons">
      <button onClick={tadaHandler}>tada</button>
      <button onClick={deleteHandler}><i className="fas fa-trash-alt"></i></button>
      <button onClick={clearStorage}>delete all</button>
    </div>

    </div>
  );
}

export default TodoItem;
