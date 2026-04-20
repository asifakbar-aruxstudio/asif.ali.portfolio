import { useEffect } from "react";
import WindowsDesktop from "./components/WindowsDesktop";

const App = () => {
  useEffect(() => {
    // Enable dark mode by default for Windows desktop theme
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <WindowsDesktop />
  );
};

export default App;