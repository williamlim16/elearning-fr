import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useState, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { User } from "../../types/model";
import { register, useRegisterUserMutation } from "../../store/user";

function RegisterInput() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [registerUser, { isSuccess, isError }] = useRegisterUserMutation();
  const [data, setData] = useState<User>({
    name: "",
    password: "",
    email: "",
  });

  const [loading, setLoading] = useState<boolean>(false);

  const handleOnChange = (property: string) => (event: any) => {
    const { value } = event.target;
    setData({
      ...data,
      [property]: value,
    });
  };

  const handleRegister = useCallback(() => {
    setLoading(true);
    const formattedData = new FormData();
    formattedData.append("name", data?.name as string);
    formattedData.append("email", data?.email as string);
    formattedData.append("password", data?.password as string);
    registerUser(formattedData);
  }, [data, registerUser]);

  useEffect(() => {
    if (isSuccess) {
      setLoading(false);
      dispatch(register(data));
      navigate("/login");
    } else if (isError) {
      setLoading(false);
    }
  }, [isSuccess, data, isError, dispatch, navigate]);

  return (
    <Stack spacing={2}>
      <Typography variant="h1" gutterBottom>
        Register
      </Typography>
      <TextField
        label="Name"
        variant="outlined"
        value={data.name}
        onChange={handleOnChange("name")}
      />
      <TextField
        label="E-mail"
        variant="outlined"
        value={data.email}
        onChange={handleOnChange("email")}
      />
      <TextField
        label="Password"
        variant="outlined"
        type="password"
        value={data.password}
        onChange={handleOnChange("password")}
      />
      <LoadingButton
        variant="contained"
        onClick={handleRegister}
        loading={loading}
      >
        Register
      </LoadingButton>
    </Stack>
  );
}
export default RegisterInput;
