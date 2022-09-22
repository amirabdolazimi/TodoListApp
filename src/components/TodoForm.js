import { useEffect, useRef, useState } from "react";

const TodoForm = ({ submitTodo, edit }) => {
  const [inputValue, setInputValue] = useState(edit ? edit.text : "");
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const changeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!inputValue) {
      alert("Enter The Todo");
      return;
    }
    submitTodo(inputValue);
    setInputValue("");
  };
  
  return (
    <form onSubmit={submitHandler}>
      <div className="formControl">
        <input
          type="text"
          value={inputValue}
          onChange={changeHandler}
          placeholder={edit ? "update todo ...." : "add todo ...."}
          ref={inputRef}
        />
        <button
          className={`btn ${edit ? "updateTodo" : "addTodo"}`}
          type="submit"
        >
          {edit ? "Update" : "Add"}
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
