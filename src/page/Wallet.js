import EditingImage from "../components/EditingImage";
import RadioTop from "../components/RadioTop";
import RadioBottom from "../components/RadioBottom";

const Wallet = (props) => {
  console.log("財布の", props);
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
        <RadioTop color_top={props.color_top} setColorTop={props.setColorTop} />
        <RadioBottom />
        <EditingImage />
      </div>
    </div>
  );
};

export default Wallet;
