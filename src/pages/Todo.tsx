import { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import InputTodo from "../components/Todos/InputTodo";
import TodoList from "../components/Todos/TodoList";
import { Todo } from "../components/Todos/model";

function Todos() {
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <Container>
      <Box sx={{ marginX: "2rem" }}>
        <InputTodo todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </Box>
    </Container>
  );
}

export default Todos;
