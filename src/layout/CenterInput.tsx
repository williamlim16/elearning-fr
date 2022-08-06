import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";

type Props = {
  children: JSX.Element;
};
function CenterInput({ children }: Props) {
  return (
    <Container>
      <Paper elevation={3} sx={{ p: "2rem" }}>
        {children}
      </Paper>
    </Container>
  );
}

export default CenterInput;
