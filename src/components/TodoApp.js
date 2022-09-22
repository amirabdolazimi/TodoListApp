import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [status, setStatus] = useState("All");

  // get Todos based on filters
  useEffect(() => {
    filterTodos(status);
  }, [todos, status]);

  // add Todos
  const submitTodo = (inputValue) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: inputValue,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };

  // complete Todos
  const completeTodo = (id) => {
    const index = todos.findIndex((t) => t.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.isCompleted = !selectedTodo.isCompleted;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };

  // delete Todos
  const removeTodo = (id) => {
    const filteredTodos = todos.filter((t) => t.id !== id);
    setTodos(filteredTodos);
  };

  // edit Todos
  const updateTodo = (id, newValue) => {
    const index = todos.findIndex((t) => t.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.text = newValue;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };
  // filter Todos based on Complete & UnComplete
  const filterTodos = (status) => {
    switch (status) {
      case "Completed":
        setFilteredTodos(todos.filter((t) => t.isCompleted));
        break;
      case "unCompleted":
        setFilteredTodos(todos.filter((t) => !t.isCompleted));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  return (
    <div className="container">
      <NavBar
        todoRemaining={todos.filter((t) => !t.isCompleted).length}
        filterTodos={filterTodos}
        status={status}
        setStatus={setStatus}
      />
      <TodoForm submitTodo={submitTodo} />
      <TodoList
        todos={filteredTodos}
        onComplete={completeTodo}
        onDelete={removeTodo}
        onUpdateTodo={updateTodo}
      />
    </div>
  );
};

export default TodoApp;
