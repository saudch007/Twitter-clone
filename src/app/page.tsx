import Main from "./components/Main";
import LeftSideBar from "./components/LeftSideBar";
import { BsSearch } from "react-icons/bs";
import RightSide from "./components/RightSide";

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center bg-black">
      <div className="max-w-screen-xl w-full h-full flex relative">
        <LeftSideBar />
        <Main />
        <RightSide />
      </div>
    </div>
  );
};

export default Home;
