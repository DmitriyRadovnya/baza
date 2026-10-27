import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToDoAPI } from "./useToDoApi.js";
import { RenameRequest, TaskResponse } from "./types.js";

export const useTaskItem = () => {
  const { removeTask, changeTaskStatus, updateTitle } = useToDoAPI();
  const queryClient = useQueryClient();
  const refreshData = () =>
    queryClient.invalidateQueries({ queryKey: ["tasks"] });

  const renameTask = useMutation<TaskResponse, Error, RenameRequest>({
    mutationFn: updateTitle,
    onSuccess: refreshData,
  });

  const changeStatus = useMutation<TaskResponse, Error, number>({
    mutationFn: changeTaskStatus,
    onSuccess: refreshData,
  });

  const deleteTask = useMutation<TaskResponse, Error, number>({
    mutationFn: removeTask,
    onSuccess: refreshData,
  });

  return { renameTask, changeStatus, deleteTask };
};
