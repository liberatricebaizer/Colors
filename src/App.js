import React from "react";
import Input from "./components/Input";
import Square from "./components/Square";
import { useState } from "react";

const App = () => {
  const [colorValue, setColorValue] = useState("");
  const [hexValue, setHexValue] = useState("");
  const [isDarkColor, setIsDarkColor] = useState(true);
  return (
    <div className="app">
      <Square
        colorValue={colorValue}
        hexValue={hexValue}
        isDarkColor={isDarkColor}
      />
      <Input
        colorValue={colorValue}
        setColorValue={setColorValue}
        setHexValue={setHexValue}
        isDarkColor={isDarkColor}
        setIsDarkColor={setIsDarkColor}
      />
    </div>
  );
};

export default App;
