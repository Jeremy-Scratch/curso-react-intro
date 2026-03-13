import React from "react";
import { useLocalStorage } from "../CustomHooks/useLocalStogare";

const TodoContext = React.createContext();

function TodoProvider({ children }) {

    const { item: todos, savedItem: savedTodos, loading, error } = useLocalStorage('TODODATA', []);
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(true);


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
        <TodoContext.Provider
            value={{
                loading,
                error,
                completedTodos,
                totalTodos,
                searchValue,
                setSearchValue,
                searched,
                completeT,
                deteleTodo,
                openModal,
                setOpenModal,
            }}>
            {children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };