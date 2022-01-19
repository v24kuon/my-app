import ColorJson from "../Color.json";

const RadioTop = (props) => {
  return (
    <div>
      <p className="text-red-500 font-black">上部の色</p>
      {ColorJson.map((colors, index) => (
        <label key={index}>
          {colors.name}
          <input type="radio" name={colors.name + "top"} value={colors.value} onChange={(e) => props.setColorTop(e.target.value)} checked={props.color_top === colors.value} />
        </label>
      ))}
    </div>
  );
};

export default RadioTop;
