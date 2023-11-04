"use strict";

import { getTodos } from "./apiCalls/todo.js";
import { getAllUsers } from "./apiCalls/user.js";
import { UserStat } from "./clases/user/UserStat.js";
import { writeCustomFile } from "./files/fileManager.js";

const createMapStat = (n) => {
  const mapStat = new Map(); //Key:userId : Number,value:UserStat
  for (let i = 1; i <= n; i++) {
    mapStat.set(i, new UserStat());
  }
  return mapStat;
};

const fillMapStat = (arrayTodo, mapStat) => {
  arrayTodo.forEach((todo) => {
    const userId = todo.userId;
    const currentStat = mapStat.get(userId);
    currentStat.incrementStats(todo.completed);
    mapStat.set(userId, currentStat);
  });
};

const createArrayInformation = (usersArray, mapStat) => {
  const arrayOut = [];
  usersArray.forEach((user) => {
    let messageTxt = user.showInformation();
    const userStat = mapStat.get(user.id);
    const sum = userStat.completed + userStat.incompleted;
    messageTxt += `
    completed: ${userStat.completed}
    incompleted: ${userStat.incompleted}
    total: ${sum} \n`;
    arrayOut.push(messageTxt);
  });
  return arrayOut;
};

const main = async () => {
  const usersArray = await getAllUsers();

  const arrayTodo = await getTodos();

  const mapStat = createMapStat(usersArray.length);

  fillMapStat(arrayTodo, mapStat);

  const message = createArrayInformation(usersArray, mapStat);
  await writeCustomFile("src/exercise1/output/output.txt", message);
};
//src\exercise1\output\output.txt
main();
