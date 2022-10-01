import { Stack, Typography, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { useAddCourseMutation } from "../../store/course";
import { selectUser } from "../../store";

function CourseInput() {
  const [addCourse, { isLoading }] = useAddCourseMutation();
  const [data, setData] = useState({
    name: "",
    user: "myself",
  });
  const userData = useSelector(selectUser);

  const handleOnChange = (property: string) => (event: any) => {
    const { value } = event.target;
    setData({
      ...data,
      [property]: value,
    });
  };

  const submitCourse = useCallback(() => {
    const formattedData = new FormData();
    formattedData.append("name", data.name);
    formattedData.append("userId", userData.id as string);

    addCourse(formattedData);
  }, [data.name, userData.id, addCourse]);

  return (
    <Stack spacing={2}>
      <Typography variant="h4" gutterBottom>
        Add Course
      </Typography>
      <TextField
        label="Name"
        variant="outlined"
        value={data.name}
        onChange={handleOnChange("name")}
      />
      <TextField label="User" disabled variant="outlined" value={data.user} />
      <LoadingButton
        variant="contained"
        loading={isLoading}
        onClick={submitCourse}
      >
        Add
      </LoadingButton>
    </Stack>
  );
}

export default CourseInput;
