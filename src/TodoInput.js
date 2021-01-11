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

  return (
    <div>

      <form>
        <input onChange={inputHandler} value={inputText} type="text"></input>
        <button onClick={addTodoHandler} type="submit">add todo</button>
      </form>

    </div>
  )
}

export default TodoInput;
