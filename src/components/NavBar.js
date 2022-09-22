const NavBar = ({ todoRemaining, filterTodos, status, setStatus }) => {
  const changeHandler = (e) => {
    setStatus(e.target.value);
    filterTodos(e.target.value);
  };

  if (!todoRemaining) return <h2>set your today todos !</h2>;
  return (
    <header>
      <span> {todoRemaining} </span>
      <h2>are not completed</h2>
      <div>
        <select onChange={changeHandler} value={status}>
          <option value="All">All</option>
          <option value="Completed">completed</option>
          <option value="unCompleted">unCompleted</option>
        </select>
      </div>
    </header>
  );
};

export default NavBar;
