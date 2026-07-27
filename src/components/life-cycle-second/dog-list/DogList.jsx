import { DogItem } from "./dog-item/DogItem";

export const DogList = ({ dogList, isLoading }) => {
  if (isLoading) return <span>Загрузка...</span>;
  return (
    <ul
      className="dog_list"
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "10px",
      }}
    >
      {dogList.map((url) => (
        <DogItem key={url} dogUrl={url} />
      ))}
    </ul>
  );
};
