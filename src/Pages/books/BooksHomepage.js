// Libraries
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSpring, animated, config } from "react-spring";

// CSS
import "../../css/BooksHomepage.css";

// Components
import Page from "../../components/layout/Page";
import Card from "../.././components/layout/Card";
import Searchbox from "../.././components/general/Searchbox";

// Other
import { book_search_queries } from "../.././SearchArrays";

export default function BooksHomepage() {
  const [foundQueries, setFoundQueries] = useState([]);

  const fromTop = useSpring({ top: "0vh", from: { top: "-30vh" }, config: { ...config.slow } });
  const fromBottom = useSpring({ bottom: "0vh", from: { bottom: "-100vh" }, config: { ...config.slow } });

  function onSearched(found_queries) {
    setFoundQueries(found_queries);
  }

  return (
    <Page name="bookshomepage" heading="Book Portal">
      <section>
        <animated.div style={fromTop} className="bookshomepage-searchbox-container">
          <Searchbox search_queries={book_search_queries} callback={onSearched}>
            Search for a book...
          </Searchbox>
        </animated.div>
        <animated.div className="bookshomepage-books-container" style={fromBottom}>
          {foundQueries.length === 0
            ? book_search_queries.sort().map((book) => {
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
    </Page>
  );
}
