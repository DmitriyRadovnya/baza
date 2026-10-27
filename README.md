# React + Vite + TS

## Ключевые типы

```typescript
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

export type RenameRequest = {
  id: number;
  newTitle: string;
};

export enum FilterMode {
  ALL = "all",
  ACTIVE = "active",
  COMPLETE = "complete",
}

type FilterControlProps = {
  filterMode: FilterMode;
  setFilterMode: Dispatch<SetStateAction<FilterMode>>;
};

export type TaskListProps = {
  tasks: Task[];
  filterMode: FilterMode;
};
```

## Как обновляется список задач после mutation:

1. Вызываю мутацию
2. Обращаюсь к серверу, при ответе OK срабатывает onSuccess
3. TanStack делает refetch и обновляет данные
