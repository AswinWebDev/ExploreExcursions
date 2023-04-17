import React, { useState } from "react";
import json from "./jsonData";
import WaterPage from "./pages/WaterPage";
import MountainPage from "./pages/MountainPage";
import "./pages/MountainPage.css";
const App = () => {
  console.log(json);
  const [isOpened, setIsOpened] = useState(false);
  const [pageNo, setPageNo] = useState(1);
  return (
    <div>
      <div
        className={
          pageNo === 1 ? "water-page-wrapper show" : "water-page-wrapper"
        }
      >
        <WaterPage
          isOpened={isOpened}
          setIsOpened={setIsOpened}
          json={json}
          setPageNo={setPageNo}
          pageNo={pageNo}
        />
      </div>
      <div
        className={
          pageNo === 2 ? "mountain-page-wrapper show" : "mountain-page-wrapper"
        }
      >
        <MountainPage
          isOpened={isOpened}
          setIsOpened={setIsOpened}
          json={json}
          setPageNo={setPageNo}
          pageNo={pageNo}
        />
      </div>
    </div>
  );
};

export default App;
