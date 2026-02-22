import { useState, useContext, useEffect } from "react";
import ThemeBtn from "./components/ThemeButtons";
import Card from "./components/Card";
import { themeContext } from "./themeContext";

function App() {

  const [themeMode, setThemeMode] = useState("light");

  function lightTheme(){
    setThemeMode("light");
  }

  function darkTheme(){
    setThemeMode("dark");
  }

  // actual change in theme
  useEffect(() =>{
    document.querySelector('html').classList.remove("light", "dark");
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  return (
    <themeContext.Provider value={{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </themeContext.Provider>
  );
}

export default App;
