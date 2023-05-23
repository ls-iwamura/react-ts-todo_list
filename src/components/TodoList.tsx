import React from "react";
import { TodoItem } from "./TodoItem";
import { TodoType } from "./TodoContainer";

type Props = {
  todos: TodoType[];
  handleChangeIsDone: (id: TodoType["id"]) => void;
  handleClickDelete: (id: TodoType["id"]) => void;
};

export const TodoList: React.FC<Props> = ({
  todos,
  handleChangeIsDone,
  handleClickDelete,
}) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <TodoItem
            todo={todo}
            handleChangeIsDone={handleChangeIsDone}
            handleClickDelete={handleClickDelete}
          />
        </li>
      ))}
    </ul>
  );
};
