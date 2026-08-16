import "./App.css";
import { Register } from "./components/Register";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Register />
    </LocalizationProvider>
  );
}

export default App;
