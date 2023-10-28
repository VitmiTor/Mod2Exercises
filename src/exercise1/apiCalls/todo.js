"use strict";

import { mainUrl } from "./utilities.js";
import { generateArrayTodos } from "../parser/todosParser.js";

export const getTodos = async () => {
  console.log("calling TODOs API");
  const response = await fetch(`${mainUrl}/todos`);
  const responseBody = await response.json(); //returning response body
  return generateArrayTodos(responseBody);
};
