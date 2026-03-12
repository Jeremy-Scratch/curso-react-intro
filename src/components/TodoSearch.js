function TodoSearch({searchValue, setSearchValue}) {

  return (
    <input placeholder="Search tasks"
    value={searchValue}
    onChange={(e) => {setSearchValue(e.target.value)}}/>
  );
}
export { TodoSearch };