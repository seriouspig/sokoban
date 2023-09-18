import { useState } from "react";
import "./App.css";
import Box from "./components/Box";
import { grid } from "./data";
import Grid from "./components/Grid";

function App() {
  const [count, setCount] = useState<number>(0);

  const gridStyle = {
    width: grid.length * 32 + "px",
    top: grid[0].length * 32 + "px",
  };

  console.log(grid);

  return (
    <>
      <div className="grid-container">
        <Grid />
      </div>
    </>
  );
}

export default App;
