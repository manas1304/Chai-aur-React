import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { TodoContext } from "./context/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);
  // State to hold all the todo items in one single array

  function addTodo(todo){
    setTodos((prevTodos) => [...prevTodos, {...todo}]);
  }

  function updateTodo(id, todo){
    setTodos((prevTodos) => prevTodos.map((individualTodo) => (individualTodo.id === id) ? todo : individualTodo) )
  }

  function deleteTodo(id){
    setTodos((prevTodos) => (prevTodos.filter((individualTodo) =>(individualTodo.id != id))))
  }

  function toggleComplete(id){
    setTodos((prevTodos) => prevTodos.map((individualTodo) => (individualTodo.id === id) ? {...individualTodo, completed: !individualTodo.completed} :individualTodo))
  }

  useEffect(() =>{
    
    const todos = JSON.parse(localStorage.getItem('todos'));
    // the todos string in getItem is the key in the browser's localStorage which will return a value which is stored in todos variable

    if(todos && todos.length > 0){
      // Checking if the array length is more than 0 ( if it's 0 that means the todos array is empty and user hasn't added any todo item)
      setTodos(todos);
    }
  }, [])
  // This effect is when the application reloads ( to save the created todo items by the user so on refresh they don't get lost )

  useEffect(() =>{
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])




  return (
    <TodoContext.Provider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {
              todos.map((todo) => (
                <div key={todo.id} className="w-full">
                  <TodoItem
                    todo={todo}
                  />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </TodoContext.Provider>
  );
}

export default App;
