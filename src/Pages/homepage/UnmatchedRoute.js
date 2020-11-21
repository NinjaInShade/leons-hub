// Libraries
import React from "react";
import { Link } from "react-router-dom";
import { useSpring, animated, config } from "react-spring";

// CSS
import "../../css/UnmatchedRoute.css";

// Images
import img1 from "../../resources/images/404_1.png";
import img2 from "../../resources/images/404_2.png";
import img3 from "../../resources/images/404_3.png";
import img4 from "../../resources/images/404_4.png";
import img5 from "../../resources/images/404_5.png";
import img6 from "../../resources/images/404_6.svg";
import img7 from "../../resources/images/404_7.svg";
import img8 from "../../resources/images/404_8.svg";

export default function UnmatchedRoute() {
  const fromTop = useSpring({ top: "0vh", from: { top: "-20vh" }, config: { ...config.slow } });
  const fromBottom = useSpring({ bottom: "0vh", from: { bottom: "-100vh" }, config: { ...config.slow } });

  const image_paths = [img1, img2, img3, img4, img5, img6, img7, img8];

  let random = Math.floor(Math.random() * image_paths.length);
  let image = image_paths[random];

  return (
    <section className="unmatched">
      <animated.h1 style={fromTop}>There's nothing here</animated.h1>
      <animated.p style={fromTop}>
        If you came here by mistake, click <Link to="/">here</Link> to go back
      </animated.p>
      <animated.img style={fromBottom} src={image} alt="404 Page not found illustration" />
    </section>
  );
}
