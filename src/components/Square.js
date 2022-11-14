const Square = ({ colorValue, hexValue, isDarkColor }) => {
  return (
    <section
      className="square"
      style={{
        backgroundColor: colorValue,
        color: isDarkColor ? "#000" : "#FFF",
      }}
    >
      <p>{colorValue ? colorValue : "Empty value"}</p>
      <p>{hexValue ? hexValue : null}</p>
    </section>
  );
};

Square.defaultProps = {
  colorValue: "Empty color value",
};
export default Square;
