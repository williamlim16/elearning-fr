import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Button, Modal, Typography, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { Stack } from "@mui/system";
import { useGetCoursesQuery } from "../store/course";
import { Course } from "../types/course";
import { allCourseAdapter } from "../components/Course/CourseAdapter";
import AppBarLayout from "../components/Layouts/AppBarLayout";
import CourseInput from "../components/Course/CourseInput";

const columns: GridColDef[] = [
  { field: "name", headerName: "Course Name", flex: 2 },
  { field: "lecturer", headerName: "Lecturer", flex: 1 },
  { field: "averageRating", headerName: "Average Rating", flex: 2 },
];

const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "1rem",
  p: 4,
};

function Dashboard() {
  const { data, error, isLoading } = useGetCoursesQuery();
  const [rows, setRows] = useState<Course[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const toggleModal = () => {
    setOpenModal((prev) => !prev);
  };
  useEffect(() => {
    if (data && !isLoading) {
      setRows(allCourseAdapter(data));
    }
  }, [data, error, isLoading]);

  return (
    <AppBarLayout>
      <div>
        <Modal open={openModal} onClose={toggleModal}>
          <Stack justifyContent="center" alignItems="center">
            <Box sx={modalStyle}>
              <CourseInput />
            </Box>
          </Stack>
        </Modal>
        <div style={{ height: 400, width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            Courses
          </Typography>
          <Stack direction="row-reverse" mb={2}>
            <Button variant="outlined" onClick={toggleModal}>
              Add
            </Button>
          </Stack>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </div>
      </div>
    </AppBarLayout>
  );
}

export default Dashboard;
