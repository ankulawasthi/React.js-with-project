import React, { useState } from "react"
import TodoInput from "./Components/TodoInput"
import TOdoList from "./Components/TOdoList";

function App() {
  const [listTodo, setListTodo] = useState([]); 

  let addList = (inputText) => {
    if(inputText != '')
        setListTodo([...listTodo, inputText]);
  }

  const deleteListItem = (key) => {
    let newListtodo = [...listTodo];
    newListtodo.splice(key, 1);
    setListTodo(newListtodo); // Corrected line
  }

  return (
    <>
      <TodoInput addList={addList} />
      {listTodo.map((listItem, i) => {
        return (
          <TOdoList key={i} index={i} item={listItem} deleteItem={deleteListItem} />
        );
      })}
    </>
  );
}

export default App;
