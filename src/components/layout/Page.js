import React from "react";
import { useRouteMatch, Link } from "react-router-dom";
import { useSpring, animated, config } from "react-spring";

import "../../css/Page.css";

export default function Page({ name, heading, children }) {
  const fromTopButton = useSpring({
    top: "2vh",
    from: { top: "-20vh" },
    config: { ...config.slow },
  });
  const fromTopHeading = useSpring({
    top: "0vh",
    from: { top: "-20vh" },
    config: { ...config.slow },
  });

  let { url } = useRouteMatch();

  return (
    <main className={`${name} page`}>
      {url !== "/" && (
        <animated.button className="back" style={fromTopButton}>
          <Link to="/">
            <i className="fas fa-hand-point-left back-icon"></i>
          </Link>
        </animated.button>
      )}
      <animated.header className="main" style={fromTopHeading}>
        <h1 className="main-text">{heading}</h1>
        <hr />
      </animated.header>
      {children}
    </main>
  );
}
