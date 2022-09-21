import React from "react";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { Snackbar } from "@mui/material";
import RegisterInput from "../components/Register/RegisterInput";
import CenterInput from "../layout/CenterInput";

// import registerHandler from "../components/Register/RegisterService";
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Register() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [open] = React.useState(false);

  return (
    <>
      <CenterInput>
        <RegisterInput />
      </CenterInput>
      <Snackbar open={open}>
        <Alert severity="success">Success</Alert>
      </Snackbar>
    </>
  );
}

export default Register;
