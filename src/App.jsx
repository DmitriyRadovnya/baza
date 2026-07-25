import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { Counter } from "./components/Counter";
import { Greeting } from "./components/Greeting";
import { WayToTheOffer } from "./components/WayToTheOffer";
import { UserCard } from "./components/UserCard";
import { SecretButton } from "./components/SecretButton";
import { FireComponent } from "./components/FireComponent";

function App() {
  const info = {
    name: "Дима",
    age: 27,
    city: "Мозырь",
  };

  const arr = new Array(27).fill("🔥");
  return (
    <>
      <Counter initialValue={5} />
      <Greeting name={"Дима"} />
      <WayToTheOffer isOffer={true} />
      <UserCard userInfo={info} />
      <SecretButton
        secretFunc={() => alert("Забыл сказать, меня зовут Дима)")}
      />
      <FireComponent fireArr={arr} />
    </>
  );
}

export default App;
