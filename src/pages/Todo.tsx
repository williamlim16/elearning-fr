import { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import InputTodo from "../components/Todo/TodoInput";
import TodoList from "../components/Todo/TodoList";
import { Todo } from "../components/Todo/model";

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
