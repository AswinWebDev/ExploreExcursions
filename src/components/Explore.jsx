const Explore = ({ pageNo }) => {
  const styled = {
    position: "absolute",
    bottom: "-1%",
    right: "0%",
    backgroundColor: "#fff",
    padding: "20px",
    fontSize: "0.8rem",
    fontWeight: "bold",
    zIndex: "1",
  };
  const styledExplore = {
    display: "block",
    color: "#0099cc",
  };
  const styledDiscover = {
    display: "block",
    color: "#006080",
  };
  return (
    <div style={styled}>
      <span style={styledExplore}>Explore the Land</span>
      <span style={styledDiscover}>
        {pageNo === 1
          ? "Discover the beauty of Maldives Islands"
          : "Experience the beauty of the Swiss Alps"}
      </span>
    </div>
  );
};

export default Explore;
