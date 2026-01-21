import express from "express";
import todoRouter from "./routes/todo.routes.js";

const app = express();
app.use(express.json());

app.use("/todos", todoRouter);

app.use((err, req, res, next) => {
  res.status(500).json({
    success: false,
    message: err.message || "Internal Server Error"
  });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
