import React, { useState } from 'react';

const TodoInput = (props) => {
  const [inputText, setInputText] = useState('');

  return (
    <div className="flex flex-col justify-center items-center bg-gray-60">
      <h1 className="text-4xl font-semibold mb-8 mt-20">ToDoApp</h1>
      <div className="flex justify-center items-center space-x-4 w-full max-w-md:">
        <input
          type="text"
          className="text-xl p-4 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Add a new task..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button className="bg-blue-500 text-white text-2xl p-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400" onClick={()=>{
          props.addList(inputText)
          setInputText('')
        }}>
          +
        </button>
      </div>
    </div>
  );
};

export default TodoInput;
