import { useEffect, useState } from "react";
import "./GridModule.css";

function GridModule({ pos, value }: { pos: number[]; value: number }) {
  const [item, setItem] = useState<string>("");

  useEffect(() => {
    switch (value) {
      case 1:
        setItem("wall");
        break;
      case 2:
        setItem("box");
        break;
      case 3:
        setItem("hole");
        break;
      case 4:
        setItem("overlay");
        break;
      default:
        return;
    }
  }, []);

  const divStyle = {
    left: pos[0] * 32 + "px",
    top: pos[1] * 32 + "px",
  };

  return <div className={`grid-module ${item}`} style={divStyle}>{item === "wall" && <div className="wall-overlay"></div>}</div>;
}

export default GridModule;
