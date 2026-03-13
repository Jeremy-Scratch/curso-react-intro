import './TodoCounter.css';
import { TodoContext } from '../../todoContext';
import React from 'react';

function TodoCounter() {
  const { completedTodos, totalTodos} = React.useContext(TodoContext);
  const goal = totalTodos === completedTodos ;
  const message1 =`You have completed ${completedTodos} of ${totalTodos} tasks`;
  const message2 =`Congrats! you have completed all of yours (${totalTodos}) tasks`;
  return (
    <h1>{goal ? message2 : message1}</h1>

  );
}

export { TodoCounter };