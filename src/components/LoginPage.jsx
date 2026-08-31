import { Box, Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../validation/authSchemas";
import { useToDoAPI } from "../hooks/useToDoApi";
import { useNavigate } from "react-router";

export const LoginPage = () => {
  const nav = useNavigate();
  const { login } = useToDoAPI();
  const {
    watch,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = async (data) => {
    const token = await login(data);
    if (token.access_token) {
      localStorage.setItem("token", JSON.stringify(token));
      nav("/");
    }
  };
  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      sx={{
        p: 5,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 2,
      }}
    >
      <TextField
        name="email"
        label="Почта"
        placeholder="Введите почту"
        {...register("email")}
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <TextField
        name="password"
        label="Пароль"
        placeholder="Придумайте пароль"
        {...register("password")}
        error={!!errors.password}
        helperText={errors.password?.message}
      />
      <Button type="submit">Зарегистрироваться</Button>
    </Box>
  );
};
