import React from "react";

const LeftSideMenu = () => {
  const styledMenu = {
    display: "flex",
    justifyContent: "space-between",
    width: "25%",
    position: "absolute",
    top: "8%",
    left: "8%",
    color: "#fff",
    textTransform: "uppercase",
  };
  return (
    <div style={styledMenu}>
      <span>Welcome</span>
      <span>Private Beaches</span>
      <span>Activities</span>
    </div>
  );
};

export default LeftSideMenu;
