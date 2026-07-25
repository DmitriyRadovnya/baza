export const UserCard = ({ userInfo }) => {
  const { name, age, city } = userInfo;
  return (
    <>
      <p>
        Имя: <span>{name}</span>
      </p>
      <p>
        Возраст: <span>{age}</span>
      </p>
      <p>Город: {city}</p>
    </>
  );
};
