export const getDogs = async (count) => {
  try {
    const res = await fetch(`https://dog.ceo/api/breeds/image/random/${count}`);
    const json = await res.json();
    if (json.status !== "success") throw new Error("Ошибка получения собак");
    return json.message;
  } catch (error) {
    console.log(error);
  }
};
