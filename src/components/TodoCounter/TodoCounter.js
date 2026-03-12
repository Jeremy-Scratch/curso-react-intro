import './TodoCounter.css';

function TodoCounter({total , completed }) {
  const goal = total === completed ;
  const message1 =`You have completed ${completed} of ${total} tasks`;
  const message2 =`Congrats! you have completed all of yours (${total}) tasks`;
  return (
    <h1>{goal ? message2 : message1}</h1>

  );
}

export { TodoCounter };