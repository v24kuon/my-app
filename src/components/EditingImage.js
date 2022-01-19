import BaseImage from "../image/base.png";

const EditingImage = () => {
  return (
    <div className="main_box">
      <div className="base_box">
        <img src={BaseImage} alt="視点1" className="css-11a090t" />
        <div className="mask_box"></div>
      </div>
    </div>
  );
};

export default EditingImage;
