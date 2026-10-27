import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToDoAPI } from "./useToDoApi.js";
import { ApiErrorPayload, RenameRequest, TaskResponse } from "./types.js";
import { AxiosError } from "axios";
import { getErrorMessage } from "../utils/getErrorMessage.js";

export const useTaskItem = () => {
  const { removeTask, changeTaskStatus, updateTitle } = useToDoAPI();
  const queryClient = useQueryClient();
  const refreshData = () =>
    queryClient.invalidateQueries({ queryKey: ["tasks"] });

  const renameTask = useMutation<
    TaskResponse,
    AxiosError<ApiErrorPayload>,
    RenameRequest
  >({
    mutationFn: updateTitle,
    onSuccess: refreshData,
    onError: (err) => console.error(getErrorMessage(err)),
  });

  const changeStatus = useMutation<
    TaskResponse,
    AxiosError<ApiErrorPayload>,
    number
  >({
    mutationFn: changeTaskStatus,
    onSuccess: refreshData,
    onError: (err) => console.error(getErrorMessage(err)),
  });

  const deleteTask = useMutation<
    TaskResponse,
    AxiosError<ApiErrorPayload>,
    number
  >({
    mutationFn: removeTask,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["tasks"] }),
    onError: (err) => console.error(getErrorMessage(err)),
  });

  return { renameTask, changeStatus, deleteTask };
};
