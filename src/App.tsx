import { Routes, Route, Navigate, Outlet } from "react-router";

import "./App.css";
import { RegisterPage } from "./components/RegisterPage";
import { Layout } from "./components/Layout";
import { LoginPage } from "./components/LoginPage";
import { ToDo } from "./components/ToDo";

const Protected = () => {
  const raw = localStorage.getItem("token");
  console.log(raw);
  if (raw) {
    const isAuth = Boolean(raw);
    return isAuth ? <Outlet /> : <Navigate to="/register" replace />;
  }
  return <Navigate to="/register" replace />;
};

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route element={<Protected />}>
          <Route index element={<ToDo />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
