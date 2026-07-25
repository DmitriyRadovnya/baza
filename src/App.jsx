import "./App.css";
import { UserProfile } from "./components/state-third/UserProfile";
import { TodoList } from "./components/state-third/TodoList";
import { ShoppingCart } from "./components/state-third/ShoppingCart";

function App() {
  return (
    <>
      <UserProfile />
      <TodoList />
      <ShoppingCart />
    </>
  );
}

export default App;
