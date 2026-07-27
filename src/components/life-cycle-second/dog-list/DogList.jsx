import { DogItem } from "./dog-item/DogItem";

export const DogList = ({ dogList }) => {
  return (
    <ul>
      {dogList.map((url) => (
        <DogItem key={url} dogUrl={url} />
      ))}
    </ul>
  );
};
