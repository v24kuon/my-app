import { useState } from "react";
import ColorJson from "../Color.json";

const RadioBottom = () => {
  const [color_bottom, setColorBottom] = useState("#FF0");
  return (
    <div>
      <p className="text-yellow-400 font-black">下部の色</p>
      {ColorJson.map((colors, index) => (
        <label key={index}>
          {colors.name}
          <input type="radio" name={colors.name + "bottom"} value={colors.value} onChange={(e) => setColorBottom(e.target.value)} checked={color_bottom === colors.value} />
        </label>
      ))}
    </div>
  );
};

export default RadioBottom;
