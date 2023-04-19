import React from "react";
import "./pages/MountainPage.css";

import LandingPage from "./pages/LandingPage";
import AboutPageContent from "./components/AboutPageContent";
import AboutPageHeader from "./components/AboutPageHeader";
import ContactFooter from "./components/ContactFooter";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <div style={{ position: "relative" }}>
        <LandingPage />
      </div>
      <div style={{ position: "relative" }}>
        <AboutPageHeader />
      </div>
      <div>
        <AboutPageContent />
      </div>
      {/* contact */}
      <div style={{ position: "relative", marginTop: "650px" }}>
        <ContactFooter />
      </div>
      {/* footer */}

      <div style={{ position: "relative", marginTop: "1450px" }}>
        <Footer />
      </div>
    </div>
  );
};

export default App;
