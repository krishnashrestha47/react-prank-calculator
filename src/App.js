import "./App.css";
import { ButtonArea } from "./components/ButtonArea";
import { Display } from "./components/Display";

function App() {
  return (
    <div class="wrapper">
      <Display />
      {/*correct way is to give different div to input and all the buttons */}
      <ButtonArea />
    </div>
  );
}

export default App;
