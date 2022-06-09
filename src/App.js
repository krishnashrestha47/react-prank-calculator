import { useState } from "react";
import "./App.css";
import { ButtonArea } from "./components/ButtonArea";
import { Display } from "./components/Display";

function App() {
  const [str, setStr] = useState("");

  const handleOnClick = (value) => {
    //what we should do when we click on a specific button
    if (value === "AC") {
      setStr("");
      return;
    }

    if (value === "=") {
      return onTotal();
    }

    if (value === "C") {
      const tempStr = str.slice(0, -1);
      setStr(tempStr);
      return;
    }

    setStr(str + value);
  };

  const onTotal = () => {
    const ttl = eval(str);
    setStr(ttl.toFixed(2).toString());
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
