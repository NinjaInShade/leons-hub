// Libraries
import React from "react";
import { useRouteMatch, Link } from "react-router-dom";
import { useSpring, animated, config } from "react-spring";

// CSS
import "../../css/Page.css";

export default function Page({ name, heading, children }) {
  let { url } = useRouteMatch();
  const fromTopButton = useSpring({ top: "2vh", from: { top: "-20vh" }, config: { ...config.slow } });
  const fromTopHeading = useSpring({ top: "0vh", from: { top: "-20vh" }, config: { ...config.slow } });

  return (
    <section className={name}>
      {url !== "/" && (
        <animated.div className="back" style={fromTopButton}>
          <Link to="/">
            <i className="fas fa-hand-point-left"></i>
          </Link>
        </animated.div>
      )}
      <animated.header className="heading" style={fromTopHeading}>
        <h1>{heading}</h1>
        <hr />
      </animated.header>
      {children}
    </section>
  );
}
