import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function LoginInput() {
  return (
    <Container>
      <Box padding={2} boxShadow={2} borderRadius={2}>
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
      </Box>
    </Container>
  );
}
export default LoginInput;
