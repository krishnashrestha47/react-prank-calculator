import { useState } from "react";
import "./App.css";
import { ButtonArea } from "./components/ButtonArea";
import { Display } from "./components/Display";

function App() {
  const [str, setStr] = useState("");

  const handleOnClick = (value) => {
    setStr(str + value);
  };

  return (
    <div className="wrapper">
      <Display str={str} />
      {/*correct way is to give different div to input and all the buttons */}
      <ButtonArea handleOnClick={handleOnClick} />
    </div>
  );
}

export default App;
