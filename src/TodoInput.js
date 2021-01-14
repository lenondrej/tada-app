import React from 'react';

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
    <div className="mt-20 text-center flex flex-col justify-center">

      <form>
        <input className="bg-gray-200 focus:bg-white border-blue-500 rounded-md p-1.5 w-6/12" onChange={inputHandler} value={inputText} type="text"></input>
        <button className="bg-secondary text-white p-1 ml-4 rounded-md" onClick={addTodoHandler} type="submit">add todo</button>
      </form>

    </div>
  )
}

export default TodoInput;
