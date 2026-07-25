import { Counter } from "./Counter";
import { Greeting } from "./Greeting";
import { WayToTheOffer } from "./WayToTheOffer";
import { UserCard } from "./UserCard";
import { SecretButton } from "./SecretButton";
import { FireComponent } from "./FireComponent";

export const PropsComponents = () => {
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
};
