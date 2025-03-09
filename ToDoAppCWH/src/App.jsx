import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const handleAdd = () => {};
  const handleEdit = () => {};

  const handleDelete = () => {};

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 rounded-lg p-5 bg-slate-200">
        <div className="addTodo my-5">
          <h2 className="text-lg font-bold ">Add a Todo</h2>
          <input type="text" className="w-96 p-1 px-2 rounded-md " />
          <button
            onClick={handleAdd}
            className="bg-slate-400 hover:bg-slate-500 p-6 py-1 text-white rounded-md font-bold mx-6"
          >
            Add
          </button>
        </div>
        <h2 className="text-lg font-bold">Your Todos</h2>
        <div className="todos">
          <div className="todo flex">
            <div className="text">{todo}</div>
            <div className="buttons">
              <button
                onClick={handleEdit}
                className="bg-slate-400 hover:bg-slate-500 p-6 py-1 text-white rounded-md font-bold mx-2"
              >
                Edit
              </button>
              <button
                onClick={handleDelete}
                className="bg-slate-400 hover:bg-slate-500 p-6 py-1 text-white rounded-md font-bold mx-2"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
