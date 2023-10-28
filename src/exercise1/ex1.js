"use strict";

import { getTodos } from "./apiCalls/todo.js";
import { getAllUsers, getUser } from "./apiCalls/user.js";

const main = async () => {
  // const users = await getUser(5);
  // users.showInformation();

  const arrayTodo = await getTodos();
  // arrayTodo[3].showInformation();

  arrayTodo.forEach((todo) => {
    const userId = todo.userId;
  });
  ///MAP de user en base al id cuento xdd
};

main();
