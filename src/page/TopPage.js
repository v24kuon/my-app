import Card from "../components/Card";
import Title from "../components/Title";

const TopPage = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
        <Title />
        <Card />
      </div>
    </div>
  );
};

export default TopPage;
