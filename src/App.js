import './App.css';
import { useState } from 'react';
import { useLocalStorage } from './CustomHooks/useLocalStogare';
import { TodoCounter } from './components/TodoCounter/TodoCounter';
import { CreateTodoButton } from './components/TodoCreateButton';
import { TodoItem } from './components/TodoItem/TodoItem';
import { TodoList } from './components/TodoList';
import { TodoSearch } from './components/TodoSearch';
import { TodoLoading } from './components/TodoLoading';
import { TodoError } from './components/TodoError';
import { TodoEmpty } from './components/TodoEmpty';

function App() {
  const {item:todos ,savedItem: savedTodos , loading, error} = useLocalStorage('TODODATA',[]);
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

  return (
    <div className="App">

      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue} />

      <TodoList>
        {loading && <TodoLoading/>}
        {error&& <TodoError/> }
        {!loading && searched.length === 0 && <TodoEmpty/> }
        
        {searched.map(t => (
          <TodoItem
            key={t.text} {...t}
            onComplete={() => completeT(t.text)}
            onDelete={() => deteleTodo(t.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />

    </div>
  );
}

export default App;