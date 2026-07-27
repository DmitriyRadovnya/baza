import "./App.css";
import { LifecycleComponent } from "./components/life-cycle/LifecycleComponent";
import { FuncComponent } from "./components/life-cycle/FuncComponent";

function App() {
  const user = {
    email: "dima.didima@gmail.com",
    password: "didima99",
    name: "Dima",
  };

  return (
    <>
      <LifecycleComponent userData={user} />
      <FuncComponent userData={user} />
    </>
  );
}

export default App;
