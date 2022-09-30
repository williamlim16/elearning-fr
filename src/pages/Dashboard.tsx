import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Stack } from "@mui/system";
import { useGetCoursesQuery } from "../store/course";
import { Course } from "../types/course";
import { allCourseAdapter } from "../components/Course/CourseAdapter";
import AppBar from "../components/Layouts/AppBar";

const columns: GridColDef[] = [
  { field: "name", headerName: "Course Name", flex: 2 },
  { field: "lecturer", headerName: "Lecturer", flex: 1 },
  { field: "averageRating", headerName: "Average Rating", flex: 2 },
];

function Dashboard() {
  const { data, error, isLoading } = useGetCoursesQuery();
  const [rows, setRows] = useState<Course[]>([]);
  useEffect(() => {
    if (data && !isLoading) {
      setRows(allCourseAdapter(data));
    }
  }, [data, error, isLoading]);
  return (
    <AppBar>
      <div style={{ height: 400, width: "100%" }}>
        <Typography variant="h2" gutterBottom>
          List of Courses
        </Typography>
        <Stack direction="row-reverse">
          <Button variant="outlined">Add Course</Button>
        </Stack>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </AppBar>
  );
}

export default Dashboard;
