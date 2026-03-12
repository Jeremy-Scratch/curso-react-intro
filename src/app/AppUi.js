import './App.css';
import { TodoCounter } from '../components/TodoCounter/TodoCounter';
import { CreateTodoButton } from '../components/TodoCreateButton';
import { TodoItem } from '../components/TodoItem/TodoItem';
import { TodoList } from '../components/TodoList';
import { TodoSearch } from '../components/TodoSearch';
import { TodoLoading } from '../components/TodoLoading';
import { TodoError } from '../components/TodoError';
import { TodoEmpty } from '../components/TodoEmpty';

function AppUi(props) {

    const {  loading, error, completedTodos, totalTodos, searchValue, setSearchValue, searched, completeT, deteleTodo } = props;
    return (
        <div className="App">

            <TodoCounter total={totalTodos} completed={completedTodos} />
            <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue} />

            <TodoList>
                {loading && <TodoLoading />}
                {error && <TodoError />}
                {!loading && searched.length === 0 && <TodoEmpty />}

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

export { AppUi };