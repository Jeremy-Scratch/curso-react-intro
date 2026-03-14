import React from 'react';
import './App.css';
import { TodoCounter } from '../components/TodoCounter/TodoCounter';
import { CreateTodoButton } from '../components/TodoCreateButton';
import { TodoItem } from '../components/TodoItem/TodoItem';
import { TodoList } from '../components/TodoList';
import { TodoSearch } from '../components/TodoSearch';
import { TodoLoading } from '../components/TodoLoading';
import { TodoError } from '../components/TodoError';
import { TodoEmpty } from '../components/TodoEmpty';
import { TodoContext } from '../todoContext';
import { Modal } from '../Modal';
import {TodoForm} from '../components/TodoForm/index';


function AppUi() {
    const { loading, error, searched, completeT, deteleTodo, openModal, setOpenModal } = React.useContext(TodoContext);
    return (
        <div className="App">

            <TodoCounter />
            <TodoSearch />

            <TodoList>
                {loading && <TodoLoading />}
                {error && <TodoError />}
                {!loading && searched?.length === 0 && <TodoEmpty />}
                {searched?.map(t => (
                    <TodoItem
                        key={t.text} {...t}
                        onComplete={() => completeT(t.text)}
                        onDelete={() => deteleTodo(t.text)}
                    />
                ))}
            </TodoList>

            <CreateTodoButton />
            {openModal && (
                <Modal>
                    <TodoForm/>
                </Modal>)}
            
        </div>
    );
}

export { AppUi };