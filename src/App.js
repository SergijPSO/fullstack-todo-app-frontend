import React, { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import { addToDo, getAllToDo, updateToDo, deleteToDo } from "./utils/HandleApi";

function App() {
  const [toDo, setTodo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState("");

  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setToDoId(_id);
  };

  useEffect(() => {
    getAllToDo(setTodo);
  }, []);

  return (
    <div className='App'>
      <div className='container'>
        <h1>ToDo App</h1>
        <div className='top'>
          <input
            type='text'
            placeholder='add ToDo'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            className='add'
            onClick={
              isUpdating
                ? () =>
                    updateToDo(toDoId, text, setTodo, setText, setIsUpdating)
                : () => addToDo(text, setText, setTodo)
            }
          >
            {isUpdating ? "Update" : "Add"}
          </button>
        </div>
        <div className='list'>
          {toDo.map((item) => (
            <ToDo
              key={item._id}
              text={item.text}
              updateMode={() => updateMode(item._id, item.text)}
              deleteTodo={() => deleteToDo(item._id, setTodo)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
