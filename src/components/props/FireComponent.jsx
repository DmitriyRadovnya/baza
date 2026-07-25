export const FireComponent = ({ fireArr }) => {
  return (
    <div>
      {fireArr.map((item, i) => (
        <span key={i}>{item}</span>
      ))}
    </div>
  );
};
