import { Routes, Route, Navigate, Outlet } from "react-router";
import { Layout } from "./components/Layout";
import { RegisterPage } from "./components/RegisterPage";
import { LoginPage } from "./components/LoginPage";
import { ToDo } from "./components/ToDo";
import "./App.css";

const Public = () => {
  const isAuth = Boolean(localStorage.getItem("token"));
  console.log(isAuth);
  return isAuth ? <Navigate to="/" replace /> : <Outlet />;
};

const Protected = () => {
  const isAuth = Boolean(localStorage.getItem("token"));
  return isAuth ? <Outlet /> : <Navigate to="/register" replace />;
};

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route element={<Public />}>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
        </Route>
        <Route element={<Protected />}>
          <Route index element={<ToDo />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
