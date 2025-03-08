import "./index.css";
// import AddToDo from "./AddToDo.jsx";
// import ToDo from "./ToDo.jsx";
// import ToDoItem from "./ToDoItem.jsx";
// import ToDoList from "./ToDoList.jsx";
import React, { useState } from "react";

function App() {
  //State to store the list of todos
  const [todos, setTodos] = useState([]);

  return (
    <div className="min-h-screen bg-gray-300 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-blue-500">My To-Do-App</h1>

        {/* Todo List (Components) */}
        <div>
          {todos.map((todo, index) => (
            <p key={index} className="border-b p-2">
              {todo}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
