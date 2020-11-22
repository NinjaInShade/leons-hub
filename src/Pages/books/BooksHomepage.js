// Libraries
import React from "react";
import { useSpring, animated, config } from "react-spring";

// CSS
import "../../css/BooksHomepage.css";

// Components
import Card from "../.././components/layout/Card";
import Searchbox from "../.././components/general/Searchbox";

export default function BooksHomepage() {
  const fromTop = useSpring({ top: "0vh", from: { top: "-20vh" }, config: { ...config.slow } });
  const fromBottom = useSpring({ bottom: "0vh", from: { bottom: "-100vh" }, config: { ...config.slow } });

  return (
    <div className="bookshomepage">
      <animated.header className="heading" style={fromTop}>
        <h1>Book Portal</h1>
        <hr />
      </animated.header>
      <section>
        <animated.div style={fromTop}>
          <Searchbox>Search for a book...</Searchbox>
        </animated.div>
      </section>
    </div>
  );
}
