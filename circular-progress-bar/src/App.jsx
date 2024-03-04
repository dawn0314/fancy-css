import { useState } from "react";
import "./App.css";
import CircleProgressBar from "./components/CircleProgressBar";

function App() {
  const [percentage, setPercentage] = useState(20);

  return (
    <div className="first-progress-bar">
      <CircleProgressBar percentage={percentage} circleWidth="200" />
      <input
        type="range"
        min="1"
        max="100"
        step="1"
        value={percentage}
        className="progressInput"
        onChange={(e) => {
          setPercentage(e.target.value);
        }}
      />
    </div>
  );
}

export default App;
