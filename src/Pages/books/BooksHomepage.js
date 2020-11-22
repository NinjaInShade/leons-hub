// Libraries
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSpring, animated, config } from "react-spring";

// CSS
import "../../css/BooksHomepage.css";

// Images
import DavidGogginsCantHurtMeCover from "../../resources/book_covers/CantHurtMe.jpg";
import RobertKiyosakiRichDadPoorDad from "../../resources/book_covers/RichDadPoorDad.jpg";

// Components
import Card from "../.././components/layout/Card";
import Searchbox from "../.././components/general/Searchbox";

export default function BooksHomepage() {
  const [foundQueries, setFoundQueries] = useState([]);
  const search_queries = [
    {
      identifier: "David Goggins - Can't Hurt me",
      url: "/Books/01/DavidGogginsCantHurtMe",
      author: "David Goggins",
      title: "Can't Hurt Me",
      img: DavidGogginsCantHurtMeCover,
    },
    {
      identifier: "Robert T. Kiyosaki - Rich Dad Poor Dad",
      url: "/Books/02/RobertKiyosakiRichDadPoorDad",
      author: "Robert T. Kiyosaki",
      title: "Rich Dad Poor Dad",
      img: RobertKiyosakiRichDadPoorDad,
    },
  ];

  const fromTop = useSpring({ top: "0vh", from: { top: "-30vh" }, config: { ...config.slow } });
  const fromBottom = useSpring({ bottom: "0vh", from: { bottom: "-100vh" }, config: { ...config.slow } });

  function onSearched(found_queries) {
    setFoundQueries(found_queries);
    console.log(found_queries);
  }

  return (
    <div className="bookshomepage">
      <animated.header className="heading" style={fromTop}>
        <h1>Book Portal</h1>
        <hr />
      </animated.header>
      <section>
        <animated.div style={fromTop} className="bookshomepage-searchbox-container">
          <Searchbox search_queries={search_queries} callback={onSearched}>
            Search for a book...
          </Searchbox>
        </animated.div>
        <animated.div className="bookshomepage-books-container" style={fromBottom}>
          {foundQueries.length === 0
            ? search_queries.sort().map((book) => {
                return (
                  <Link to={book.url} key={book.identifier}>
                    <Card className="bookshomepage-card">
                      <h3>{book.author}</h3>
                      <h2>{book.title}</h2>
                      <img src={book.img} alt={`${book.identifier} book cover`} />
                    </Card>
                  </Link>
                );
              })
            : foundQueries.map((book) => {
                return (
                  <Link to={book.item.url} key={book.item.identifier}>
                    <Card className="bookshomepage-card">
                      <h3>{book.item.author}</h3>
                      <h2>{book.item.title}</h2>
                      <img src={book.item.img} alt={`${book.item.identifier} book cover`} />
                    </Card>
                  </Link>
                );
              })}
        </animated.div>
      </section>
    </div>
  );
}
