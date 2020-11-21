// Libraries
import React from "react";
import { Link } from "react-router-dom";
import { useSpring, animated, config } from "react-spring";

// CSS
import "../.././css/Homepage.css";

// Images
import Blob1 from "../../resources/svgs/Blob1.svg";
import Blob2 from "../../resources/svgs/Blob2.svg";
import Blob3 from "../../resources/svgs/Blob3.svg";

// Components
import Card from "../.././components/layout/Card";

export default function Homepage() {
  const fromTop = useSpring({ top: "0vh", from: { top: "-20vh" }, config: { ...config.slow } });
  const fromBottom = useSpring({ bottom: "0vh", from: { bottom: "-100vh" }, config: { ...config.slow } });

  return (
    <div className="homepage">
      <animated.header className="heading" style={fromTop}>
        <h1>Leon's Portal</h1>
        <hr />
      </animated.header>
      <animated.section className="navigation" style={fromBottom}>
        <div className="blob-container">
          <Link to="/Wikipedia">
            <Card>
              <i className="fab fa-wikipedia-w"></i>
              <h2>Wikipedia</h2>
            </Card>
          </Link>
          <img src={Blob3} alt="blob" className="blob blob3" />
        </div>
        <Link to="/To-do">
          <Card>
            <span className="iconify" data-inline="false" data-icon="ri:calendar-todo-fill"></span>
            <h2>To-Do</h2>
          </Card>
        </Link>
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
    </div>
  );
}
