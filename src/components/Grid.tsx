import { useState } from "react";
import { baseGrid } from "./../data";
import "./Grid.css";
import GridModule from "./GridModule";

function Grid() {
    const [grid, setGrid] = useState<number[][]>(baseGrid[0])

    const baseGridLength = {
      width: grid[0].length * 32 + "px",
    };

  return (
    <div className="base-grid-container" style={baseGridLength}>
      {grid.map((row, y) => {
        return row.map((col, x) => {
          return (
            <GridModule
              key={[x, y].join(":")}
              pos={[x, y]}
              value={grid[y][x]}
            />
          );
        });
      })}
      {grid.map((row, y) => {
        return row.map((col, x) => {
          return (
            grid[y][x] === 1 && (
              <GridModule key={[x, y].join(":")} pos={[x, y]} value={4} />
            )
          );
        });
      })}
    </div>
  );
}

export default Grid;
