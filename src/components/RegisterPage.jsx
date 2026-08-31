import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../validation/authSchemas";
import { useToDoAPI } from "../hooks/useToDoApi";
import { useNavigate } from "react-router";

export const RegisterPage = () => {
  const { signUp } = useToDoAPI();
  const nav = useNavigate();
  const {
    control,
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
  const onSubmit = async (data) => {
    const user = {
      email: data.email,
      password: data.password,
      name: data.login,
    };
    const token = await signUp(user);
    console.log(token);
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
      <Controller
        name="gender"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <FormControl component="fieldset" error={!!error}>
            <FormLabel component="legend">Выберите пол</FormLabel>
            <RadioGroup {...field} row>
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="Мужской"
              />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Женский"
              />
            </RadioGroup>
            {error && <FormHelperText>{error.message}</FormHelperText>}
          </FormControl>
        )}
      />
      <TextField
        name="age"
        label="Возраст"
        placeholder="Введите возраст"
        type="number"
        {...register("age")}
        error={!!errors.age}
        helperText={errors.age?.message}
      />
      <Button type="submit">Зарегистрироваться</Button>
    </Box>
  );
};
