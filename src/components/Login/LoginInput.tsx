import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

function LoginInput() {
  return (
    <Stack spacing={2}>
      <Typography variant="h1" gutterBottom>
        Login
      </Typography>
      <TextField id="outlined-basic" label="email" variant="outlined" />
      <TextField
        id="outlined-basic"
        label="password"
        variant="outlined"
        type="password"
      />
      <Button variant="contained">Login</Button>
    </Stack>
  );
}
export default LoginInput;
