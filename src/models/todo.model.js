import { readData, writeData } from "../utils/fileHandler.js";

export const getTodos = () => readData();

export const saveTodos = (todos) => writeData(todos);
