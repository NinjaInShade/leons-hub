// Libraries
import React from "react";
import { Link } from "react-router-dom";
import { useSpring, animated, config } from "react-spring";

// CSS
import "../.././css/Homepage.css";

// Images
import Blob1 from "../../resources/images/Blob1.svg";
import Blob2 from "../../resources/images/Blob2.svg";
import Blob3 from "../../resources/images/Blob3.svg";

// Components
import Card from "../.././components/layout/Card";
import Page from "../.././components/layout/Page";

export default function Homepage() {
  const fromBottom = useSpring({ bottom: "0vh", from: { bottom: "-100vh" }, config: { ...config.slow } });

  return (
    <Page name="homepage" heading="Leon's Portal">
      <animated.section className="navigation" style={fromBottom}>
        <div className="blob-container">
          <img src={Blob3} alt="blob" className="blob blob3" />
          <a href="https://sitebuilder-66d12.web.app/" target="_blank" rel="noreferrer">
            <Card>
              <span class="iconify" data-inline="false" data-icon="ic:baseline-build"></span>
              <h2>Site builder</h2>
            </Card>
          </a>
        </div>
        <a href="https://todoapp-48ccc.web.app/" rel="noreferrer" target="_blank">
          <Card>
            <span className="iconify" data-inline="false" data-icon="ri:calendar-todo-fill"></span>
            <h2>To-Do</h2>
          </Card>
        </a>
        <div className="blob-container">
          <Link to="/About">
            <Card>
              <i className="fas fa-info-circle"></i>
              <h2>About</h2>
            </Card>
          </Link>
          <img src={Blob1} alt="blob" className="blob blob1" />
        </div>
        <Link to="/Code">
          <Card>
            <i className="fas fa-laptop-code"></i>
            <h2>Code</h2>
          </Card>
        </Link>
        <div className="blob-container">
          <Link to="/Books">
            <Card>
              <i className="fas fa-book"></i>
              <h2>Books</h2>
            </Card>
          </Link>
          <img src={Blob2} alt="blob" className="blob blob2" />
        </div>
        <Link to="/Settings">
          <Card>
            <i className="fas fa-cog"></i>
            <h2>Settings</h2>
          </Card>
        </Link>
      </animated.section>
    </Page>
  );
}
