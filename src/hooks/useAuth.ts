import { useNavigate } from "react-router";
import { useToDoAPI } from "./useToDoApi.js";
import { useMutation } from "@tanstack/react-query";
import { AuthResponse } from "./types.js";
import { LoginData, RegisterData } from "../validation/authSchemas.js";

export const useAuth = () => {
  const nav = useNavigate();
  const { login, registration } = useToDoAPI();

  const signUp = useMutation<AuthResponse, Error, RegisterData>({
    mutationFn: registration,
    onSuccess: (res) => {
      if (res.access_token) {
        localStorage.setItem("token", JSON.stringify(res.access_token));
        nav("/");
      }
    },
  });

  const signIn = useMutation<AuthResponse, Error, LoginData>({
    mutationFn: login,
    onSuccess: (res) => {
      if (res.access_token) {
        localStorage.setItem("token", JSON.stringify(res.access_token));
        nav("/");
      }
    },
  });

  return { signUp, signIn };
};
