import { useState } from "react";
import "./App.css";
import { ButtonArea } from "./components/ButtonArea";
import { Display } from "./components/Display";

function App() {
  const [str, setStr] = useState("");
  const [lastOperator, setLastOperator] = useState("");

  const operators = ["+", "-", "*", "/", "%"];

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

    if (operators.includes(value)) {
      setLastOperator(value);
      const lastChar = str.slice(-1);
      if (operators.includes(lastChar)) {
        //replce the last operator with the new one
        const strWithOutLastChar = str.slice(0, -1);
        setStr(strWithOutLastChar + value);
        return;
      }
    }

    if (value === ".") {
      if (lastOperator) {
        const positionOfLastOperator = str.lastIndexOf(lastOperator);
        // const beforeLastOperator = str.slice(0, positionOfLastOperator + 1);
        const afterLastOperator = str.slice(positionOfLastOperator + 1);

        if (afterLastOperator.includes(".")) {
          return;
        }
      } else if (str.includes(".")) {
        return;
      }
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
