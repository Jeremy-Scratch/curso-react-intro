import { useState } from 'react';
import { useLocalStorage } from '../CustomHooks/useLocalStogare';
import { AppUi } from './AppUi';

function App() {
  const { item: todos, savedItem: savedTodos, loading, error } = useLocalStorage('TODODATA', []);
  const [searchValue, setSearchValue] = useState('');


  const completedTodos = todos.filter(t => t.completed === true).length;
  const totalTodos = todos.length;
  const searched = todos.filter(t => t.text.toLowerCase().includes(searchValue.toLowerCase().trim()));
  console.log('me repito');

  const completeT = (text) => {

    const newTodos = [...todos]
    const todoIndex = todos.findIndex(t => t.text === text);
    const test = newTodos[todoIndex].completed;
    if (test) {
      newTodos[todoIndex].completed = false;
    } else {
      newTodos[todoIndex].completed = true;
    }

    savedTodos(newTodos);
  };

  const deteleTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = todos.findIndex(t => t.text === text);
    newTodos.splice(todoIndex, 1);

    savedTodos(newTodos);
  };

  const props = { loading, error, completedTodos, totalTodos, searchValue, setSearchValue, searched, completeT, deteleTodo };
  return (
    <AppUi {...props} />
  );
}

export default App;