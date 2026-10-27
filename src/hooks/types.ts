export type AuthResponse = {
  access_token: string;
};

export type Task = {
  id: number;
  title: string;
  completed: boolean;
};

export type TaskResponse = {
  status: number;
  data: Task;
};

export type GetTasksPayload = {
  data: Task[];
};

export type RenameRequest = {
  id: number;
  newTitle: string;
};

export type ApiErrorPayload = { message: string };
