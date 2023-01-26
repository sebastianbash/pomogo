import { Pomodoro } from "@/components";
import { withTranslation } from "react-i18next";
import { HomeInterface } from "../interfaces";

const Home: React.FC<HomeInterface> = () => {
  return (
    <div className="w-screen h-screen relative flex flex-col justify-center items-center">
      <Pomodoro />
    </div>
  );
};

export default withTranslation()(Home);
