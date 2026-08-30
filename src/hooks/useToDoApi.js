import api from "../api/todoAPI";

export const useToDoAPI = () => {
  const login = async (userData) => {
    try {
      const response = await api.post("/api/auth/login", {
        email: userData.email,
        password: userData.password,
      });
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

  return { login, getTasks };
};
