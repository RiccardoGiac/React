import React, { useState } from 'react';

function TodoList()  {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos(prevTodos => [...prevTodos, todo]); // Aggiungi un nuovo todo
  };

  return (
    <div>
      <button onClick={() => addTodo('Nuovo Todo')}>Aggiungi Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;