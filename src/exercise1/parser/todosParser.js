"use strict";

import { Todo } from "../clases/Todo.js";

export const generateArrayTodos = (arrayTodosJson) => {
  const arrayTodos = [];

  arrayTodosJson.forEach((element) => {
    arrayTodos.push(createTodo(element));
  });

  return arrayTodos;
};

const createTodo = (todosJson) => {
  return new Todo(
    todosJson["userId"],
    todosJson["id"],
    todosJson["title"],
    todosJson["completed"]
  );
};
