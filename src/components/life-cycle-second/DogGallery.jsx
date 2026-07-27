import { useEffect, useState } from "react";
import { DogControl } from "./dog-control/DogControl";
import { getDogs } from "../../api/dogsGalleryApi";
import { DogList } from "./dog-list/DogList";

export const DogGallery = () => {
  const [updateCount, setUpdateCount] = useState(0);
  const [countOfDogs, setCountOfDogs] = useState(3);
  const [dogList, setDogList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const loadDogList = async () => {
      try {
        const dogs = await getDogs(countOfDogs);
        if (!dogs) throw new Error("Ошибка получения собак");
        setDogList(dogs);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    loadDogList();
  }, [countOfDogs, updateCount]);

  return (
    <>
      <h1>Галерея собак</h1>
      <h3>Картинки обновлены {updateCount} раз(а)</h3>
      <DogControl
        defaultCount={countOfDogs}
        changeCount={setCountOfDogs}
        changeUpdateCount={setUpdateCount}
      />
      <DogList dogList={dogList} isLoading={isLoading} />
    </>
  );
};
