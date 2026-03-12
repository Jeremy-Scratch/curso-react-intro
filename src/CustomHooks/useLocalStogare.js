import { useEffect, useState } from "react";

function useLocalStorage(itemName, initialValue) {

    const [item, setItem] = useState(initialValue);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
       setTimeout(() => {
        try {
        const localItems = localStorage.getItem(itemName);
        let parsedItem;

        if (!localItems) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
        } else {
            parsedItem = JSON.parse(localItems);
            setItem(parsedItem);
        }
        setLoading(false);
        
       } catch (error) {
        setError(error);
        setLoading(false);
       }
        
       }, 2000);
    },[]);


    const savedItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    };

    return {item, savedItem, loading, error};
};

export { useLocalStorage };

// const TodoData = [
//   { text: 'Wash the car', completed: true },
//   { text: 'Make the bed', completed: true },
//   { text: 'Go to the gym', completed: false },
//   { text: 'Buy groceries', completed: true },
//   { text: 'Read a book', completed: false }
// ];

// localStorage.setItem('TODODATA', JSON.stringify(TodoData));
// localStorage.removeItem('TODOS');
