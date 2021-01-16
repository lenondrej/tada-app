import React from 'react';
import './TodoInput.css';

const TodoInput = ({inputText, setInputText, todos, setTodos}) => {

  const inputHandler = (event) => {
    setInputText(event.target.value);
  };

  const addTodoHandler = (event) => {
    event.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Math.random()*1000
      }
    ]);
    setInputText("");
  };

  const clearInput = (event) => {
    event.preventDefault();
    setInputText("");
  }

  return (
    <div>

      <form className="todo-form">
        <input className="todo-input"onChange={inputHandler} value={inputText} type="text" name="insert your todo"></input>
        <button className="btn-close" onClick={clearInput}><i className="fas fa-times"></i></button>
        <button className="btn-todo-input"onClick={addTodoHandler} type="submit">add todo</button>
      </form>

    </div>
  )
}

export default TodoInput;
