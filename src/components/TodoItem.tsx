import React from "react";
import { TodoType } from "./TodoContainer";

type Props = {
  todo: TodoType;
  handleChangeIsDone: (id: TodoType["id"]) => void;
  handleClickDelete: (id: TodoType["id"]) => void;
};

export const TodoItem: React.FC<Props> = ({
  todo,
  handleChangeIsDone,
  handleClickDelete,
}) => {
  return (
    <div>
      <span>{todo.content}</span>
      <input
        type="checkbox"
        checked={todo.isDone}
        onChange={() => handleChangeIsDone(todo.id)}
      />
      <button onClick={() => handleClickDelete(todo.id)}>x</button>
    </div>
  );
};
