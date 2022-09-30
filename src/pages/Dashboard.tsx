import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useGetCoursesQuery } from "../store/course";
import { Course } from "../types/course";
import { allCourseAdapter } from "../components/Course/CourseAdapter";

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
    <div style={{ height: 400, width: "100%" }}>
      <Typography variant="h2" gutterBottom>
        List of Courses
      </Typography>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}

export default Dashboard;
