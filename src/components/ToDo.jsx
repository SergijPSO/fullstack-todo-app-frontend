import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const ToDo = ({ text, updateMode, deleteTodo }) => {
  return (
    <div className='todo'>
      <div className='text'>{text}</div>
      <div className='icons'>
        <FaEdit className='icon' onClick={updateMode} />
        <FaTrashAlt className='icon' onClick={deleteTodo} />
      </div>
    </div>
  );
};

export default ToDo;
