import React, { useState } from "react";
import { TodoAddForm } from "./TodoAddForm";
import { TodoList } from "./TodoList";

export type TodoType = {
  id: string;
  content: string;
  isDone: boolean;
};

export const TodoContainer = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const addTodo = (inputText: TodoType["content"]) => {
    const uuid = self.crypto.randomUUID();
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: uuid, content: inputText, isDone: false },
    ]);
  };

  const handleChangeIsDone = (id: TodoType["id"]) => {
    const newTodos = todos.map((todo) => {
      return todo.id === id ? { ...todo, isDone: !todo.isDone } : todo;
    });
    setTodos(newTodos);
  };

  const handleClickDelete = (id: TodoType["id"]) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div>
      <TodoAddForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        handleChangeIsDone={handleChangeIsDone}
        handleClickDelete={handleClickDelete}
      />
    </div>
  );
};
