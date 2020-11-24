// Libraries
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSpring, animated, config } from "react-spring";

// CSS
import "../../css/CodeHomepage.css";

// Components
import Page from "../../components/layout/Page";
import Card from "../.././components/layout/Card";
import Searchbox from "../.././components/general/Searchbox";

// Other
import { code_search_queries } from "../.././SearchArrays";

export default function CodeHomepage() {
  const [foundQueries, setFoundQueries] = useState([]);

  const fromTop = useSpring({ top: "0vh", from: { top: "-30vh" }, config: { ...config.slow } });
  const fromBottom = useSpring({ bottom: "0vh", from: { bottom: "-100vh" }, config: { ...config.slow } });

  function onSearched(found_queries) {
    setFoundQueries(found_queries);
  }

  return (
    <Page name="codehomepage" heading="Code Portal">
      <section>
        <animated.div style={fromTop} className="codehomepage-searchbox-container">
          <Searchbox search_queries={code_search_queries} callback={onSearched}>
            Search for code docs...
          </Searchbox>
        </animated.div>
        <animated.div className="codehomepage-code-container" style={fromBottom}>
          {foundQueries.length === 0
            ? code_search_queries.sort().map((code) => {
                return (
                  <Link to={code.url} key={code.identifier}>
                    <Card className="codehomepage-card">
                      <h3>{code.topic}</h3>
                      <h2>{code.title}</h2>
                      <img src={code.img} alt={`${code.identifier} svg`} />
                    </Card>
                  </Link>
                );
              })
            : foundQueries.map((code) => {
                return (
                  <Link to={code.item.url} key={code.item.identifier}>
                    <Card className="codehomepage-card">
                      <h3>{code.item.topic}</h3>
                      <h2>{code.item.title}</h2>
                      <img src={code.item.img} alt={`${code.item.identifier} svg`} />
                    </Card>
                  </Link>
                );
              })}
        </animated.div>
      </section>
    </Page>
  );
}
