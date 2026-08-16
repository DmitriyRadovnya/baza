import * as z from "zod";

export const userScheme = z
  .object({
    name: z.string().min(1, "Имя обязательно"),
    email: z.string().email("Некорректный email"),
    password: z
      .string()
      .min(6, "Пароль должен содержать минимум 6 символов")
      .regex(
        /[A-ZА-ЯЁ]/,
        "Пароль должен содержать хотя бы одну заглавную букву",
      ),
    repeatPassword: z.string().min(1, "Повторите пароль"),
    birthDate: z
      .date("Введите дату")
      .refine(
        (val) => val <= new Date(),
        "Дата рождения не может быть в будущем",
      )
      .refine((val) => {
        const age =
          (Date.now() - val.getTime()) / (365.25 * 24 * 60 * 60 * 1000);
        return age >= 18;
      }, "Вам должно быть не менее 18 лет"),
    gender: z
      .string({ required_error: "Выберите пол" })
      .min(1, "Выберите пол")
      .refine((v) => ["male", "female"].includes(v), "Выберите пол"),
    phoneNumber: z
      .string()
      .min(13, "Введите полный номер")
      .max(13, "Номер должен состоять из 13 символов")
      .regex(/^\+375\d{9}$/, "Формат: +375XXXXXXXXX"),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: "Пароли не совпадают",
    path: ["repeatPassword"],
  });
