import React, { useReducer } from "react";
import { TodoAddForm } from "./TodoAddForm";
import { TodoList } from "./TodoList";
import { useMemo } from "react";
import { useCallback } from "react";

export type TodoType = {
  id: string;
  content: string;
  isDone: boolean;
};

type TodoActionType =
  | {
      type: "add";
      content: TodoType["content"];
    }
  | {
      type: "toggleIsDone";
      id: TodoType["id"];
    }
  | {
      type: "delete";
      id: TodoType["id"];
    };

export const TodoContainer = () => {
  const initialTodos: TodoType[] = useMemo(() => [], []);
  const todoReducerFunc = useCallback(
    (state: TodoType[], action: TodoActionType): TodoType[] => {
      switch (action.type) {
        case "add": {
          const uuid = self.crypto.randomUUID();
          return [
            { id: uuid, content: action.content, isDone: false },
            ...state,
          ];
        }
        case "toggleIsDone": {
          return state.map((todo) => {
            return todo.id === action.id
              ? { ...todo, isDone: !todo.isDone }
              : todo;
          });
        }
        case "delete": {
          return state.filter((todo) => todo.id !== action.id);
        }
      }
    },
    []
  );

  const [todos, dispatchTodos] = useReducer(todoReducerFunc, initialTodos);
  const addTodo = (content: TodoType["content"]) =>
    dispatchTodos({ type: "add", content });
  const handleChangeIsDone = (id: TodoType["id"]) =>
    dispatchTodos({ type: "toggleIsDone", id });
  const handleClickDelete = (id: TodoType["id"]) =>
    dispatchTodos({ type: "delete", id });

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
