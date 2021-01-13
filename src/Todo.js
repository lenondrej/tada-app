import React, { useState, useEffect } from 'react';
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
  };

  return (
    <>
      <h1 className="font-poppins text-5xl font-bold text-primary mt-40 text-center">Make tadaaa 🎉 from TODO!</h1>
      <p className="text-yellow-50 text-3xl font-medium text-center mt-5">... and make it great again!</p>

      <TodoInput  todos={todos}
                  setTodos={setTodos}
                  inputText={inputText}
                  setInputText={setInputText}
      />

      <TodoList setTodos={setTodos}
                todos={todos}/>
    </>
  );
}

export default Todo;
