import React from 'react';

const TodoItem = ({text, todo, tada, todos, setTodos}) => {

  const tadaHandler = () => {

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
    <div className="mt-8 bg-gray-200 p-3.5 object-center pr-8 pl-8 mr-12 ml-12 rounded-2xl">
      <p className="text-2xl font-semibold">👉🏻 {text} 👈🏻</p>
      {tada ? `you did it, tadaaaaaa 🎉 ` : `DO IT! 👷🏻‍♂️`}
      <button className="bg-secondary text-white p-1 ml-4 rounded-md mt-7 sel"
              onClick={tadaHandler}>{tada ? 'are you sure?' : 'done with this?'}</button>
    </div>
  );
}

export default TodoItem;
