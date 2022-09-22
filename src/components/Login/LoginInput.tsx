import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useCallback, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { User } from "../../types/model";
import { useLoginUserMutation, login } from "../../store/user";

function LoginInput() {
  const dispatch = useDispatch();
  const [data, setData] = useState<User>({
    password: "",
    email: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [loginUser, { data: dataResponse, isSuccess, isError }] =
    useLoginUserMutation();

  const handleOnChange = (property: string) => (event: any) => {
    const { value } = event.target;
    setData({
      ...data,
      [property]: value,
    });
  };

  const handleLogin = useCallback(() => {
    setLoading(true);
    const formattedData = new FormData();
    formattedData.append("email", data?.email as string);
    formattedData.append("password", data?.password as string);
    loginUser(data);
  }, [data, loginUser]);

  useEffect(() => {
    if (isSuccess) {
      setLoading(false);
      dispatch(login(dataResponse));
    } else if (isError) {
      setLoading(false);
    }
  }, [isSuccess, isError, dispatch, dataResponse]);

  return (
    <Stack spacing={2}>
      <Typography variant="h1" gutterBottom>
        Login
      </Typography>
      <TextField
        label="email"
        variant="outlined"
        onChange={handleOnChange("email")}
        value={data.email}
      />
      <TextField
        label="password"
        variant="outlined"
        type="password"
        onChange={handleOnChange("password")}
        value={data.password}
      />
      <LoadingButton
        variant="contained"
        onClick={handleLogin}
        loading={loading}
      >
        Login
      </LoadingButton>
    </Stack>
  );
}
export default LoginInput;
