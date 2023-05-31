import React, { useState } from "react";
import { TodoType } from "./TodoContainer";

type Props = {
  addTodo: (content: TodoType["content"]) => void;
};

export const TodoAddForm: React.FC<Props> = ({ addTodo }) => {
  const [inputText, setInputText] = useState("");

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleClickAdd = () => {
    if (inputText.trim() === "") {
      return;
    }
    addTodo(inputText);
    setInputText("");
  };
  return (
    <div>
      <input type="text" value={inputText} onChange={handleChangeInput} />
      <button onClick={handleClickAdd}>Add</button>
    </div>
  );
};
