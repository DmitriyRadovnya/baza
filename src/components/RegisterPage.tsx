import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  IconButton,
  InputAdornment,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterData, registerSchema } from "../validation/authSchemas.js";
import { Link } from "react-router";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth.js";

export const RegisterPage = () => {
  const [showPass, setShowPass] = useState(false);
  const { signUp } = useAuth();

  const {
    control,
    watch,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      gender: "",
      age: "",
    },
  });

  const togglePasswordVisibility = () => {
    setShowPass((p) => !p);
  };

  const onSubmit = async (data: RegisterData) => {
    signUp.mutate(data);
  };
  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      sx={{
        width: "500px",
        p: 5,
        display: "flex",
        flexDirection: "column",
        alignSelf: "center",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 2,
      }}
    >
      <FormLabel>Регистрация</FormLabel>
      <TextField
        label="Логин"
        placeholder="Придумайте логин"
        {...register("name")}
        error={!!errors.name}
        helperText={errors.name?.message}
      />
      <TextField
        label="Почта"
        placeholder="Введите почту"
        {...register("email")}
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <TextField
        label="Пароль"
        type={showPass ? "text" : "password"}
        placeholder="Придумайте пароль"
        {...register("password")}
        error={!!errors.password}
        helperText={errors.password?.message}
        sx={{ width: "100%" }}
        slotProps={{
          input: {
            endAdornment:
              watch("password")?.length > 0 ? (
                <InputAdornment position="end">
                  <IconButton onClick={togglePasswordVisibility} edge="end">
                    {showPass ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ) : null,
          },
        }}
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
        label="Возраст"
        placeholder="Введите возраст"
        type="number"
        {...register("age")}
        error={!!errors.age}
        helperText={errors.age?.message}
      />
      <Button type="submit">Зарегистрироваться</Button>
      <Typography>
        Уже есть аккаунт?{" "}
        <MuiLink component={Link} to="/login">
          Вход
        </MuiLink>
      </Typography>
    </Box>
  );
};
