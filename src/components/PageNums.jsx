import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const PageNums = ({ setPageNo, pageNo }) => {
  const styledPageNums = {
    position: "absolute",
    bottom: "3%",
    left: "50%",
    display: "flex",
    justifyContent: "space-between",
    minWidth: "300px",
    fontSize: "0.8rem",
    color: "#fff",
    alignItems: "center",
  };
  const styledBorder = {
    border: "0.1px solid #fff",
    minWidth: "100px",
    maxHeight: "0.1px",
  };
  const styledArrow = {
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: "50%",
    padding: "8px",
  };
  const styledFocusPage = {
    padding: "4px",
    borderRadius: "50%",
    backgroundColor: "rgba(0,0,0,0.5)",
  };
  return (
    <div style={styledPageNums}>
      <div style={pageNo === 1 ? styledFocusPage : null}>01</div>
      <div style={pageNo === 2 ? styledFocusPage : null}>02</div>
      <div>03</div>
      <div style={styledBorder}></div>
      <div
        style={styledArrow}
        onClick={() => {
          pageNo > 1 ? setPageNo(pageNo - 1) : setPageNo(1);
        }}
      >
        <ArrowBackIcon />
      </div>
      <div
        style={styledArrow}
        onClick={() => {
          pageNo < 2 ? setPageNo(pageNo + 1) : setPageNo(2);
        }}
      >
        <ArrowForwardIcon />
      </div>
    </div>
  );
};

export default PageNums;
