// Libraries
import React from "react";
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
  const fromLeft = useSpring({ left: "0vw", from: { left: "-40vw" }, config: { ...config.default } });
  const fromTop = useSpring({ top: "0vh", from: { top: "-10vh" }, config: { ...config.default } });

  return (
    <div className="homepage">
      <animated.header className="heading" style={fromTop}>
        <h1>Leon's Portal</h1>
        <hr />
      </animated.header>
      <section className="navigation">
        <animated.div className="blob-container" style={fromLeft}>
          <Card>
            <i className="fab fa-wikipedia-w"></i>
            <h2>Wikipedia</h2>
          </Card>
          <img src={Blob3} alt="blob" className="blob blob3" />
        </animated.div>
        <animated.div style={{ ...fromLeft, position: "relative" }}>
          <Card>
            <span className="iconify" data-inline="false" data-icon="ri:calendar-todo-fill"></span>
            <h2>To-Do</h2>
          </Card>
        </animated.div>
        <animated.div className="blob-container" style={fromLeft}>
          <Card>
            <i className="fas fa-info-circle"></i>
            <h2>About</h2>
          </Card>
          <img src={Blob1} alt="blob" className="blob blob1" />
        </animated.div>
        <animated.div style={{ ...fromLeft, position: "relative" }}>
          <Card>
            <i className="fas fa-laptop-code"></i>
            <h2>Code</h2>
          </Card>
        </animated.div>
        <animated.div className="blob-container" style={fromLeft}>
          <Card>
            <i className="fas fa-book"></i>
            <h2>Books</h2>
          </Card>
          <img src={Blob2} alt="blob" className="blob blob2" />
        </animated.div>
        <animated.div style={{ ...fromLeft, position: "relative" }}>
          <Card>
            <i className="fas fa-cog"></i>
            <h2>Settings</h2>
          </Card>
        </animated.div>
      </section>
    </div>
  );
}
