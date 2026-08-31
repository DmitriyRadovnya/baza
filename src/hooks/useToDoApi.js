import api from "../api/todoAPI";

export const useToDoAPI = () => {
  const login = async (userData) => {
    try {
      const response = await api.post("/api/auth/login", { ...userData });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const signUp = async (userData) => {
    try {
      const response = await api.post("/api/auth/register", { ...userData });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const getTasks = async () => {
    try {
      const response = await api.get("/api/todos");
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const createTask = async (title) => {
    try {
      const response = await api.post("/api/todos", { title });
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const changeTaskStatus = async (id) => {
    try {
      const response = await api.patch(`/api/todos/${id}/toggle`);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const updateTitle = async (id, newTitle) => {
    try {
      const res = await api.patch(`/api/todos/${id}`, { title: newTitle });
      return res.status;
    } catch (error) {}
  };

  const removeTask = async (id) => {
    try {
      const response = await api.delete(`/api/todos/${id}`);
      return response.status;
    } catch (error) {}
  };

  return {
    login,
    signUp,
    createTask,
    updateTitle,
    changeTaskStatus,
    removeTask,
    getTasks,
  };
};
