// Libraries
import React from "react";
import { useSpring, animated, config } from "react-spring";

// CSS
import "../../css/BooksHomepage.css";

// Images
import DavidGogginsCantHurtMeCover from "../../resources/book_covers/CantHurtMe.jpg";

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
        <animated.div style={fromTop} className="bookshomepage-searchbox-container">
          <Searchbox>Search for a book...</Searchbox>
        </animated.div>
        <div className="bookshomepage-books-container">
          <Card className="bookshomepage-card">
            <h3>David goggins!</h3>
            <h2>Can't Hurt Me</h2>
            <img src={DavidGogginsCantHurtMeCover} alt="Cant Hurt Me by David Goggins book cover" />
          </Card>
          <Card className="bookshomepage-card">
            <h3>David goggins!</h3>
            <h2>Can't Hurt Me</h2>
            <img src={DavidGogginsCantHurtMeCover} alt="Cant Hurt Me by David Goggins book cover" />
          </Card>
          <Card className="bookshomepage-card">
            <h3>David goggins!</h3>
            <h2>Can't Hurt Me</h2>
            <img src={DavidGogginsCantHurtMeCover} alt="Cant Hurt Me by David Goggins book cover" />
          </Card>
          <Card className="bookshomepage-card">
            <h3>David goggins!</h3>
            <h2>Can't Hurt Me</h2>
            <img src={DavidGogginsCantHurtMeCover} alt="Cant Hurt Me by David Goggins book cover" />
          </Card>
          <Card className="bookshomepage-card">
            <h3>David goggins!</h3>
            <h2>Can't Hurt Me</h2>
            <img src={DavidGogginsCantHurtMeCover} alt="Cant Hurt Me by David Goggins book cover" />
          </Card>
        </div>
      </section>
    </div>
  );
}
