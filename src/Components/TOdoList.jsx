import React from 'react';

const TOdoList = (props) => {
  return (
    <div className="w-full max-w-lg mx-auto mt-4">
      <ul className="list-none p-0">
        <li className="flex justify-between items-center p-4 bg-white rounded-lg shadow-md mb-3 hover:bg-gray-100">
          {props.item}
          <span className="text-red-500 cursor-pointer hover:text-red-700">
            <i className="fa-solid fa-trash-can text-xl"  onClick={e => {
                props.deleteItem(props.index) // Corrected line
            }}></i>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default TOdoList;
