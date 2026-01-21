import { getTodos, saveTodos } from "../models/todo.model.js";

export const fetchTodos = async (req, res, next) => {
  try {
    const todos = await getTodos();
    res.status(200).json(todos);
  } catch (error) {
    next(error);
  }
};

export const createTodo = async (req, res, next) => {
  try {
    const { title, completed = false } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }

    const todos = await getTodos();
    const newTodo = { id: Date.now(), title, completed };

    todos.push(newTodo);
    await saveTodos(todos);

    res.status(201).json(newTodo);
  } catch (error) {
    next(error);
  }
};

export const updateTodo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const todos = await getTodos();

    const todo = todos.find(t => t.id == id);
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    Object.assign(todo, req.body);
    await saveTodos(todos);

    res.status(200).json(todo);
  } catch (error) {
    next(error);
  }
};

export const deleteTodo = async (req, res, next) => {
  try {
    const { id } = req.params;
    let todos = await getTodos();

    const lengthBefore = todos.length;
    todos = todos.filter(t => t.id != id);

    if (lengthBefore === todos.length) {
      return res.status(404).json({ message: "Todo not found" });
    }

    await saveTodos(todos);
    res.status(200).json({ message: "Todo deleted successfully" });
  } catch (error) {
    next(error);
  }
};
