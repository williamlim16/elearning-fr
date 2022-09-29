import React, { useState, useEffect } from "react";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { Snackbar } from "@mui/material";
import { useSelector } from "react-redux";
import RegisterInput from "../components/Register/RegisterInput";
import CenterInput from "../layout/CenterInput";
import { selectUser } from "../store";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Register() {
  const [open, setOpen] = useState(false);
  const userData = useSelector(selectUser);
  useEffect(() => {
    if (userData.email !== "") {
      setOpen(true);
    }
  }, [userData]);

  const closeSnackBar = () => {
    setOpen(false);
  };

  return (
    <>
      <CenterInput>
        <RegisterInput />
      </CenterInput>
      <Snackbar open={open} autoHideDuration={2000} onClose={closeSnackBar}>
        <Alert severity="success">
          Successfuly registered. Redirecting you to login
        </Alert>
      </Snackbar>
    </>
  );
}

export default Register;
