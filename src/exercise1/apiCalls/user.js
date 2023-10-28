"use strict";

import { generateUser, generateUserArray } from "../parser/usersParser.js";
import { mainUrl } from "./utilities.js";

export const getUser = async (id) => {
  console.log(`calling user API with id: ${id}`);
  const response = await fetch(`${mainUrl}/users/${id}`);
  const responseBody = await response.json();
  return generateUser(responseBody);
};

export const getAllUsers = async () => {
  console.log("return all user");
  const response = await fetch(`${mainUrl}/users`);
  const responseBody = await response.json();
  return generateUserArray(responseBody);
};
