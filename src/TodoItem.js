import React from 'react';

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
    <div>
      <p style={{fontSize: '1.3rem'}}>{text}</p>
      <button onClick={tadaHandler}>done with this shit?</button>
      {tada ? ` you are done with this, take a nap 🥳` : `you need to work harder 👷🏻‍♂️`}
    </div>
  );
}

export default TodoItem;
