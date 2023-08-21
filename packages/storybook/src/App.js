import "./App.css";
import { Button } from "./stories/Button";

function App() {
  return (
    <div className="App">
      <Button
        label={"button"}
        backgroundColor={"blue"}
        size={"large"}
        primary={true}
      />
    </div>
  );
}

export default App;
