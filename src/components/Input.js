import colorNames from "colornames";

const Input = ({
  colorValue,
  setColorValue,
  setHexValue,
  isDarkColor,
  setIsDarkColor,
}) => {
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={submitHandler}>
      <label>Add Color Name:</label>
      <input
        autoFocus
        type="text"
        placeholder="color name"
        required
        value={colorValue}
        onChange={(e) => {
          setColorValue(e.target.value);
          setHexValue(colorNames(e.target.value));
        }}
      />
      <button type="button" onClick={() => setIsDarkColor(!isDarkColor)}>
        Toggle color
      </button>
    </form>
  );
};

export default Input;
