import React, { useState, useEffect } from 'react';
import './Todo.css';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

function Todo() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getLocalStorage();
  }, []);

  useEffect(() => {
    saveToLocalstorage();
  }, [todos, setTodos]);

  const saveToLocalstorage = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  const getLocalStorage = () => {
    if(localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let localTodo = JSON.parse(localStorage.getItem('todos'));
      setTodos(localTodo);
    }
  }

  const clearStorage = () => {
    setTodos([])
  }


  return (
    <>
      <button className="btn-danger" onClick={clearStorage}>Reset all todos! 🙀</button>
      <h1>Make tadaaa 🎉 from TODO!</h1>
      <h3>This app is as meaningless as life itself</h3>
      <TodoInput todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText}/>
      <TodoList setTodos={setTodos} todos={todos}/>
    </>
  );
}

export default Todo;
