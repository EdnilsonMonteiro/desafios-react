import React, { useState, useContext } from "react";

const ThemeContext = React.createContext({
  theme: "dark",
  setTheme: () => {}
});

function Comp1() {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <h1>Current Theme: {theme}</h1>
    </div>
  );
}

function Comp2() {
  const { setTheme } = useContext(ThemeContext);
  return (
    <div>
      <button onClick={() => setTheme("light")}>Light</button>
      <button onClick={() => setTheme("dark")}>Dark</button>
    </div>
  );
}

export default function FixTheTheme() {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Comp1 />
      <Comp2 />
      <div className={theme === "dark" ? "dark" : "light"}>
        This is some example text
      </div>
    </ThemeContext.Provider>
  );
}
//INCOMPLETO