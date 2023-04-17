import React from "react";
import LeftSideMenu from "../components/LeftSideMenu";
import Menu from "../components/Menu";
import RightSideBar from "../components/RightSideBar";
import ScrollDown from "../components/ScrollDown";
import PageNums from "../components/PageNums";
import Explore from "../components/Explore";
import "../../src/App.css";

const MountainPage = ({ isOpened, setIsOpened, json, setPageNo, pageNo }) => {
  return (
    <div>
      <header
        className="header"
        style={{ backgroundImage: `url(${json[1].image})` }}
      ></header>
      <div className="heading-primary">
        <span className="heading-primary-main">{json[1].title}</span>
        <span className="heading-primary-sub">{json[1].description}</span>
      </div>
    </div>
  );
};

export default MountainPage;
