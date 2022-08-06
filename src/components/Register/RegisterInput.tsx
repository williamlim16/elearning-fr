import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

function RegisterInput() {
  return (
    <Stack spacing={2}>
      <Typography variant="h1" gutterBottom>
        Register
      </Typography>
      <TextField id="outlined-basic" label="name" variant="outlined" />
      <TextField id="outlined-basic" label="email" variant="outlined" />
      <TextField
        id="outlined-basic"
        label="password"
        variant="outlined"
        type="password"
      />
      <Button variant="contained">Register</Button>
    </Stack>
  );
}
export default RegisterInput;
