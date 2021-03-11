import { useSpring, animated, config } from "react-spring";
import { Link } from "react-router-dom";
import React from "react";
import Blob1 from "../../resources/images/Blob1.svg";
import Blob2 from "../../resources/images/Blob2.svg";
import Blob3 from "../../resources/images/Blob3.svg";
import Card from "../.././components/layout/Card";
import Page from "../.././components/layout/Page";

import "../.././css/Homepage.css";

export default function Homepage() {
  const fromBottom = useSpring({
    bottom: "0vh",
    from: { bottom: "-100vh" },
    config: { ...config.slow },
  });

  return (
    <Page name="homepage" heading="Leon's Portal">
      <animated.section className="navigation" style={fromBottom}>
        <div className="blob-container">
          <img src={Blob3} alt="blob" className="blob blob3" />
          <a href="https://sitebuilder-66d12.web.app/" target="_blank" rel="noreferrer">
            <Card className="navigation-card">
              <span
                className="iconify navigation-icon"
                data-inline="false"
                data-icon="ic:baseline-build"
              ></span>
              <h2 className="navigation-text">Site builder</h2>
            </Card>
          </a>
        </div>
        <a href="https://todoapp-48ccc.web.app/" rel="noreferrer" target="_blank">
          <Card className="navigation-card">
            <span
              className="iconify navigation-icon"
              data-inline="false"
              data-icon="ri:calendar-todo-fill"
            ></span>
            <h2 className="navigation-text">To-Do</h2>
          </Card>
        </a>
        <div className="blob-container">
          <Link to="/About">
            <Card className="navigation-card">
              <i className="fas fa-info-circle navigation-icon"></i>
              <h2 className="navigation-text">About</h2>
            </Card>
          </Link>
          <img src={Blob1} alt="blob" className="blob blob1" />
        </div>
        <Link to="/Code">
          <Card className="navigation-card">
            <i className="fas fa-laptop-code navigation-icon"></i>
            <h2 className="navigation-text">Code</h2>
          </Card>
        </Link>
        <div className="blob-container">
          <Link to="/Books">
            <Card className="navigation-card">
              <i className="fas fa-book navigation-icon"></i>
              <h2 className="navigation-text">Books</h2>
            </Card>
          </Link>
          <img src={Blob2} alt="blob" className="blob blob2" />
        </div>
        <Link to="/Settings">
          <Card className="navigation-card">
            <i className="fas fa-cog navigation-icon"></i>
            <h2 className="navigation-text">Settings</h2>
          </Card>
        </Link>
      </animated.section>
    </Page>
  );
}
