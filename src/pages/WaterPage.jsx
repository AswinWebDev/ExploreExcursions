import React from "react";
import LeftSideMenu from "../components/LeftSideMenu";
import Menu from "../components/Menu";
import RightSideBar from "../components/RightSideBar";
import ScrollDown from "../components/ScrollDown";
import PageNums from "../components/PageNums";
import Explore from "../components/Explore";
import "../../src/App.css";

const WaterPage = ({ isOpened, setIsOpened, json, setPageNo, pageNo }) => {
  return (
    <div>
      <header
        className="header"
        style={{ backgroundImage: `url(${json[0].image})` }}
      ></header>
      <div className="heading-primary">
        <span className="heading-primary-main">{json[0].title}</span>
        <span className="heading-primary-sub">{json[0].description}</span>
      </div>
      <LeftSideMenu />
      {!isOpened ? <Menu setIsOpened={setIsOpened} /> : null}

      <RightSideBar setIsOpened={setIsOpened} isOpened={isOpened} />

      <ScrollDown />
      <PageNums setPageNo={setPageNo} pageNo={pageNo} />
      <Explore pageNo={pageNo} />
    </div>
  );
};

export default WaterPage;
