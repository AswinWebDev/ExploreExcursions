import balloon from "../assets/balloon.jpg";
import boat from "../assets/boat.jpg";
import rock from "../assets/rock.jpg";
import street from "../assets/street.jpg";
import AboutPageContentBoxes from "./AboutPageContentBoxes";
import ExploreIcon from "@mui/icons-material/Explore";
import ConnectingAirportsIcon from "@mui/icons-material/ConnectingAirports";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
const AboutPageContent = () => {
  const styledDiv = {
    // position: "absolute",
    display: "block",
    width: "100%",
    top: 0,
    left: 0,
    height: "40vh",
    // backgroundColor: "grey",
    marginTop: "430px",

    // padding: "5rem",
    color: "black",
    zindex: 4,
  };
  const styledflexContainer = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: "30px",
  };
  const styledflexImageConatiner = {
    display: "flex",
    // flexDirection: "column",
    justifyContent: "end",
    alignItems: "center",
  };
  const styledimgItem = {
    width: "150px",
    marginRight: "20px",
    height: "150px",
    marginBottom: "10px",
  };
  const styledWrittenContent = {
    width: "400px",
    marginTop: "100px",
  };
  const styledWrittenContentPara = {
    opacity: "50%",
  };
  const styledWhatWeDo = {
    textAlign: "center",
    marginTop: "70px",
    marginBottom: "50px",
  };
  const styledContentBoxes = {
    display: "flex",
    justifyContent: "center",
    gap: "40px",
  };
  const styledTalkToUs = {
    marginTop: "70px",
    padding: "8px",
    backgroundColor: "lightgrey",
    fontSize: "12px",
    width: "200px",
    textAlign: "center",
    letterSpacing: "1px",
    textTransform: "uppercase",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#5c5c8a",
    color: "white",
  };
  return (
    <div>
      <div style={styledDiv}>
        <div style={styledflexContainer}>
          <div style={styledflexImageConatiner}>
            <div style={{ marginTop: "50px" }}>
              <div className="img1">
                <img src={balloon} alt="balloon image" style={styledimgItem} />
              </div>
              <div className="img1">
                <img src={rock} alt="balloon image" style={styledimgItem} />
              </div>
            </div>
            <div>
              <div className="img1">
                <img src={street} alt="balloon image" style={styledimgItem} />
              </div>
              <div className="img1">
                <img src={boat} alt="balloon image" style={styledimgItem} />
              </div>
            </div>
          </div>
          <div className="flex2">
            <div style={styledWrittenContent}>
              <h5 style={{ opacity: "40%" }}>Since 2010</h5>
              <h2>We are a Full Service Travel Website</h2>
              <p style={styledWrittenContentPara}>
                Welcome to Explore Excursions, the ultimate travel guide for all
                your wanderlust needs! Whether you're planning a family
                vacation, a romantic getaway, or an adventure-packed trip with
                friends, we're here to make your travel dreams come true.
              </p>
              <h3>Our Mission</h3>
              <p style={styledWrittenContentPara}>
                Our mission is simple: to inspire, inform, and guide you through
                every step of your journey. From choosing the perfect
                destination to finding the best deals on flights and
                accommodations, we've got you covered.
              </p>
            </div>
          </div>
        </div>
        {/* content boxes */}
        <div>
          <h3 style={styledWhatWeDo}>What We Do</h3>
          <div style={styledContentBoxes}>
            <AboutPageContentBoxes
              color={"#5c5c8a"}
              heading={"Destination Guides"}
              para={
                "From popular tourist hotspots to off-the-beaten-path gems, we've got you covered with insider tips, top attractions, and must-try experiences."
              }
              icon={<ExploreIcon />}
            />
            <AboutPageContentBoxes
              color={"#cdaa98"}
              heading={"Travel Deals"}
              para={
                "Our team scours the internet for the latest discounts and promotions, so you can save money and focus on enjoying your trip."
              }
              icon={<ConnectingAirportsIcon />}
            />
            <AboutPageContentBoxes
              color={"coral"}
              heading={"Community-driven Content"}
              para={
                "We believe that travel is all about connection and community, which is why we encourage our readers to share their travel experiences and insights."
              }
              icon={<LocalLibraryIcon />}
            />
          </div>
          {/* talk with executive */}
          <div style={styledTalkToUs}>Talk to Us</div>
        </div>
      </div>
    </div>
  );
};

export default AboutPageContent;
