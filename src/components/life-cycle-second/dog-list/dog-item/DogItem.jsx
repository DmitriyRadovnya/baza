export const DogItem = ({ dogUrl }) => {
  const pathnameArr = new URL(dogUrl).pathname.split("/");
  const breedForAlt = `${pathnameArr[pathnameArr.length - 2]}` + " photo";
  return <img src={dogUrl} width={250} height={250} alt={breedForAlt} />;
};
