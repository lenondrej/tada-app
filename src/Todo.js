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


  return (
    <>
      <h1>Make tadaaa 🎉 from TODO!</h1>
      <h3>And make your life great again!</h3>
      <TodoInput todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText}/>
      <TodoList setTodos={setTodos} todos={todos}/>
    </>
  );
}

export default Todo;
