import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Box,
  Button,
  IconButton,
  TextField,
  InputAdornment,
  FormControl,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  Radio,
  FormHelperText,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { useForm, Controller } from "react-hook-form";
import { userScheme } from "../zod/userSchema";

export const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(null);
  const {
    control,
    watch,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userScheme),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      repeatPassword: "",
      birthDate: null,
      gender: "",
      phoneNumber: "+375",
    },
  });

  const togglePasswordVisibility = () => {
    setShowPassword((p) => !p);
  };

  const toggleRepeatPasswordVisibility = () => {
    setShowRepeatPassword((p) => !p);
  };

  const submit = (data) => {
    setData(data);
    setOpen(true);
  };

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit(submit)}
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
          name="name"
          label="Имя"
          placeholder="Введите имя"
          {...register("name")}
          error={!!errors.name}
          helperText={errors.name?.message}
        />
        <TextField
          name="email"
          label="Email"
          placeholder="Введите email"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />

        <TextField
          name="password"
          type={showPassword ? "text" : "password"}
          label="Пароль"
          placeholder="Введите пароль"
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
          slotProps={{
            input: {
              endAdornment:
                watch("password")?.length > 0 ? (
                  <InputAdornment position="end">
                    <IconButton onClick={togglePasswordVisibility} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ) : null,
            },
          }}
        />
        <TextField
          name="repeatPassword"
          type={showRepeatPassword ? "text" : "password"}
          label="Пароль"
          placeholder="Повторите пароль"
          {...register("repeatPassword")}
          error={!!errors.repeatPassword}
          helperText={errors.repeatPassword?.message}
          slotProps={{
            input: {
              endAdornment:
                watch("repeatPassword")?.length > 0 ? (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={toggleRepeatPasswordVisibility}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ) : null,
            },
          }}
        />
        <Controller
          name="birthDate"
          control={control}
          render={({ field, fieldState }) => (
            <DatePicker
              value={field.value ? dayjs(field.value) : null}
              onChange={(newValue) =>
                field.onChange(newValue ? newValue?.toDate() : "")
              }
              slotProps={{
                textField: {
                  error: !!errors.birthDate,
                  helperText: errors.birthDate?.message,
                  fullWidth: true,
                },
              }}
            />
          )}
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
          name="phoneNumber"
          placeholder="+375298781231"
          label="Номер телефона"
          inputMode="tel"
          {...register("phoneNumber")}
          error={!!errors.phoneNumber}
          helperText={errors.phoneNumber?.message}
        />
        <Button type="submit">Зарегистрироваться</Button>
      </Box>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Вы зарегистрированы, ваши данные:</DialogTitle>
        <DialogContent>
          {data && (
            <Typography component="pre" fontSize={14}>
              {JSON.stringify(data, null, 2)}
            </Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Закрыть</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
