import { Box, Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../validation/registerSchema";

export const RegisterPage = () => {
  const {
    watch,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      login: "",
      email: "",
      password: "",
      gender: "",
      age: "",
    },
  });
  const onSubmit = () => {
    console.log("submit");
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
        name="login"
        label="Логин"
        placeholder="Придумайте логин"
        {...register("login")}
        error={!!errors.login}
        helperText={errors.login?.message}
      />
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
      <TextField
        name="age"
        label="Возраст"
        placeholder="Введите возраст"
        {...register("age")}
        error={!!errors.age}
        helperText={errors.age?.message}
      />
      <Button type="submit">Зарегистрироваться</Button>
    </Box>
  );
};
