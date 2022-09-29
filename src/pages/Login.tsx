import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { Snackbar } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import LoginInput from "../components/Login/LoginInput";
import CenterInput from "../layout/CenterInput";
import { selectUser } from "../store";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Login() {
  const [open, setOpen] = useState(false);
  const userData = useSelector(selectUser);
  useEffect(() => {
    if (userData.id !== "") {
      setOpen(true);
    }
  }, [userData]);

  const closeSnackBar = () => {
    setOpen(false);
  };
  return (
    <>
      <CenterInput>
        <LoginInput />
      </CenterInput>

      <Snackbar open={open} autoHideDuration={2000} onClose={closeSnackBar}>
        <Alert severity="success">
          Successfuly logged in. Redirecting you to dashboard
        </Alert>
      </Snackbar>
    </>
  );
}

export default Login;
