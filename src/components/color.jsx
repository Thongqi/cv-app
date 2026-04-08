import { createContext, useContext, useState } from "react";

export const ColorContext = createContext(null);

export function useColorContext() {
  const context = useContext(ColorContext);

  return context;
}

export function ColorContextProvider({ children }) {
  const [color, setColor] = useState("#4F5D79");

  function handleColorChange(e) {
    setColor(e.target.value);
  }

  return (
    <ColorContext.Provider value={{ color, handleColorChange }}>
      {children}
    </ColorContext.Provider>
  );
}

export function ColorSwitcher() {
  const { color, handleColorChange } = useContext(ColorContext);
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <label>Select Theme Color:</label>
      <input type="color" value={color} onChange={handleColorChange}></input>
    </div>
  );
}
