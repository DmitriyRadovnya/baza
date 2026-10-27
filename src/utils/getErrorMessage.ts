import { isAxiosError } from "axios";
import { ApiErrorPayload } from "../hooks/types";

export const getErrorMessage = (err: unknown): string => {
  if (isAxiosError<ApiErrorPayload>(err)) {
    return err.response?.data?.message ?? err.message;
  }
  if (err instanceof Error) return err.message;
  return "Неизвестная ошибка";
};
