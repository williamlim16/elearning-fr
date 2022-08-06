import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import React, { useState } from "react";

import { Todo } from "./model";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

function InputTodo({ todos, setTodos }: Props) {
  const [todo, setTodo] = useState<string>("");

  const handleAdd = () => {
    if (todo) {
      setTodos([
        ...todos,
        { id: Date.now(), todo, isDone: false, isEditting: false },
      ]);
      setTodo("");
    }
  };
  return (
    <>
      <Typography variant="h1" align="center">
        Tasksify
      </Typography>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="stretch"
      >
        <TextField
          id="outlined-basic"
          label="Add Task"
          variant="outlined"
          fullWidth
          margin="dense"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <Button variant="outlined" onClick={handleAdd}>
          Add Task
        </Button>
      </Stack>
    </>
  );
}

export default InputTodo;
