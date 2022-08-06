import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";

import { useState } from "react";
import { Todo } from "./model";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

function TodoList({ todos, setTodos }: Props) {
  const [input, setInput] = useState<string>("");
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  function handleDelete(todo: Todo): void {
    setTodos(todos.filter((e) => e.id !== todo.id));
  }

  function handleEdit(todoTarget: Todo): void {
    setInput(todoTarget.todo);
    setTodos(
      todos.map((todo) =>
        todo.id === todoTarget.id
          ? { ...todo, isEditting: !todo.isEditting }
          : todo
      )
    );
  }

  function handleSave(todoTarget: Todo): void {
    setTodos(
      todos.map((todo) =>
        todo.id === todoTarget.id
          ? { ...todo, todo: input, isEditting: !todoTarget.isEditting }
          : todo
      )
    );
  }

  function handleChange(e: any) {
    setInput(e.target.value);
  }

  function getTextState(todo: Todo): string {
    if (todo.isDone) {
      return "line-through";
    }
    return "done";
  }

  function getTextBox(todo: Todo): JSX.Element {
    if (todo.isEditting) {
      return (
        <TextField
          id="outlined-basic"
          variant="outlined"
          value={input}
          onChange={(e) => {
            handleChange(e);
          }}
        />
      );
    }
    return (
      <Typography sx={{ textDecoration: getTextState(todo) }}>
        {todo.todo}
      </Typography>
    );
  }

  function getEditOrSaveIcon(todo: Todo): JSX.Element {
    if (todo.isEditting) {
      return (
        <IconButton onClick={() => handleSave(todo)}>
          <SaveIcon />
        </IconButton>
      );
    }
    return (
      <IconButton onClick={() => handleEdit(todo)}>
        <EditIcon />
      </IconButton>
    );
  }

  return (
    <>
      {todos.map((todo) => (
        <Card key={todo.id} sx={{ marginTop: "2rem" }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ mr: "20px", ml: "10px" }}
          >
            <CardContent>{getTextBox(todo)}</CardContent>
            <Stack direction="row" spacing={2}>
              <IconButton onClick={() => handleDone(todo.id)}>
                <DoneIcon />
              </IconButton>
              {getEditOrSaveIcon(todo)}
              <IconButton onClick={() => handleDelete(todo)}>
                <DeleteIcon />
              </IconButton>
            </Stack>
          </Stack>
        </Card>
      ))}
    </>
  );
}
export default TodoList;
