import { AxiosResponse } from "axios";
import api from "../api/todoAPI";
import { LoginData, RegisterData } from "../validation/authSchemas";
import {
  AuthResponse,
  GetTasksPayload,
  RenameRequest,
  Task,
  TaskResponse,
} from "./types";

export const useToDoAPI = () => {
  const login = async (userData: LoginData): Promise<AuthResponse> => {
    const response = await api.post<AuthResponse>("/api/auth/login", {
      ...userData,
    });
    return response.data;
  };

  const registration = async (
    userData: RegisterData,
  ): Promise<AuthResponse> => {
    const response = await api.post<AuthResponse>("/api/auth/register", {
      ...userData,
    });
    return response.data;
  };

  const getTasks = async (): Promise<Task[]> => {
    const response = await api.get<GetTasksPayload>("/api/todos");
    return response.data.data;
  };

  const createTask = async (title: string): Promise<TaskResponse> => {
    const response = await api.post<
      TaskResponse,
      AxiosResponse<TaskResponse>,
      { title: string }
    >("/api/todos", { title });
    return response.data;
  };

  const changeTaskStatus = async (id: number): Promise<TaskResponse> => {
    const response = await api.patch(`/api/todos/${id}/toggle`);
    return response;
  };

  const updateTitle = async ({
    id,
    newTitle,
  }: RenameRequest): Promise<TaskResponse> => {
    const res = await api.patch(`/api/todos/${id}`, { title: newTitle });
    return res;
  };

  const removeTask = async (id: number): Promise<TaskResponse> => {
    const response = await api.delete(`/api/todos/${id}`);
    return response;
  };

  return {
    login,
    registration,
    createTask,
    updateTitle,
    changeTaskStatus,
    removeTask,
    getTasks,
  };
};
