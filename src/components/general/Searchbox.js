// Libraries
import React, { useState } from "react";
import Fuse from "fuse.js";

// CSS
import "../.././css/Searchbox.css";

export default function Searchbox({ children, search_queries, callback }) {
  const [focused, setFocused] = useState(false);
  const [searchedTerm, setSearchedTerm] = useState("");

  const options = {
    keys: ["identifier"],
  };

  const fuse = new Fuse(search_queries, options);

  function changeHandler(e) {
    setSearchedTerm(e.target.value);
    callback(fuse.search(searchedTerm));
  }

  return (
    <div className="searchbox-container">
      <input
        type="text"
        onFocus={() => setFocused(!focused)}
        onBlur={() => setFocused(!focused)}
        onSubmit={() => console.log("Entered")}
        value={searchedTerm}
        onChange={(e) => {
          changeHandler(e);
        }}
      />
      <label
        style={
          focused
            ? { transform: "translate(-10px, -55px)", color: "#00ceaf" }
            : searchedTerm.length > 0
            ? { transform: "translate(-10px, -55px)", color: "#00ceaf" }
            : {}
        }
      >
        {children}
      </label>
      <button type="submit">
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
}
