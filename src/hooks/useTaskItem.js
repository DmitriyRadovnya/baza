import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToDoAPI } from "./useToDoApi";

export const useTaskItem = () => {
  const { removeTask, changeTaskStatus, updateTitle } = useToDoAPI();
  const queryClient = useQueryClient();

  const refreshData = () => queryClient.invalidateQueries(["tasks"]);

  const renameTask = useMutation({
    mutationFn: (id, title) => updateTitle(id, title),
    onSuccess: refreshData,
  });

  const changeStatus = useMutation({
    mutationFn: (id) => changeTaskStatus(id),
    onSuccess: refreshData,
  });

  const deleteTask = useMutation({
    mutationFn: (id) => removeTask(id),
    onSuccess: refreshData,
  });

  return { renameTask, changeStatus, deleteTask };
};
