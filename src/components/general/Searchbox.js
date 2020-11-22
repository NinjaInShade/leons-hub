// Libraries
import React, { useState } from "react";

// CSS
import "../.././css/Searchbox.css";

export default function Searchbox({ children }) {
  const [focused, setFocused] = useState(false);
  const [searchedTerm, setSearchedTerm] = useState("");

  return (
    <div className="searchbox-container">
      <input
        type="text"
        onFocus={() => setFocused(!focused)}
        onBlur={() => setFocused(!focused)}
        onSubmit={() => console.log("Entered")}
        value={searchedTerm}
        onChange={(e) => {
          setSearchedTerm(e.target.value);
        }}
      />
      <label style={focused ? { transform: "translate(-10px, -55px)", color: "#00ceaf" } : {}}>{children}</label>
      <button type="submit">
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
}
