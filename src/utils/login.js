export async function login({ email, password }) {
  try {
    const res = await fetch("https://todo-redev.onrender.com/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (!res.ok)
      throw new Error(`Ошибка логина: ${res.status} ${res.statusText}`);
    const token = await res.json();
    return token;
  } catch (error) {
    console.log(error.message);
  }
}
