import React from 'react';
import $ from 'jquery';
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
        id: Math.random()*1000,
        isPublic: true
      }
    ]);
    setInputText("");
  };

  // handle header visibility
  $('.todo-input').on('focus', () => {
    $('.header').addClass('hidden');
  });


  return (
    <div>

      <form className="todo-form" onSubmit={addTodoHandler}>
        <input className="todo-input"onChange={inputHandler} value={inputText} type="text" name="insert your todo"></input>
        <button className="btn-todo-input"type="submit">add todo</button>
      </form>

    </div>
  )
}

export default TodoInput;
