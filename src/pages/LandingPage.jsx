import WaterPage from "./WaterPage";
import MountainPage from "./MountainPage";
import LeftSideMenu from "../components/LeftSideMenu";
import Menu from "../components/Menu";
import RightSideBar from "../components/RightSideBar";
import ScrollDown from "../components/ScrollDown";
import PageNums from "../components/PageNums";
import Explore from "../components/Explore";
import json from "../jsonData";
import "./MountainPage.css";
import { useState } from "react";

const LandingPage = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [pageNo, setPageNo] = useState(1);
  return (
    <div>
      <div
        className={
          pageNo === 1 ? "water-page-wrapper show" : "water-page-wrapper"
        }
      >
        <WaterPage json={json} />
      </div>
      <div
        className={
          pageNo === 2 ? "mountain-page-wrapper show" : "mountain-page-wrapper"
        }
      >
        <MountainPage json={json} />
      </div>
      <LeftSideMenu />
      {!isOpened ? <Menu setIsOpened={setIsOpened} /> : null}

      <RightSideBar setIsOpened={setIsOpened} isOpened={isOpened} />

      <ScrollDown />
      <PageNums setPageNo={setPageNo} pageNo={pageNo} />
      <Explore pageNo={pageNo} />
      {/* about section */}
    </div>
  );
};

export default LandingPage;
