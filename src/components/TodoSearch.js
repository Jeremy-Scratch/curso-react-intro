import React from 'react';
import { TodoContext } from '../todoContext';

function TodoSearch() {

  const {searchValue,setSearchValue}=React.useContext(TodoContext);
  return (
    <input placeholder="Search tasks"
    value={searchValue}
    onChange={(e) => {setSearchValue(e.target.value)}}/>
  );
}
export { TodoSearch };