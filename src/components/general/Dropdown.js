// Libraries
import React, { useState } from "react";

// CSS
import "../../css/Dropdown.css";

// Options expects an array of objects.
// Object example:
// {heading: "Dark", stateValue: "0"}

export default function Dropdown({ heading, options, callback }) {
  const [opened, setOpened] = useState(false);
  const [current, setCurrent] = useState();

  function onClickHandler(item, index) {
    callback(item.stateValue);
    setCurrent(index);
  }

  return (
    <div className="dropdown-container">
      <button
        className="dropdown-box"
        onClick={() => {
          setOpened(!opened);
        }}
      >
        <p>{heading}</p>
        <div style={opened ? {} : { transform: "rotate(-90deg)" }}>
          <i class="fas fa-caret-down"></i>
        </div>
      </button>
      <ul className="dropdown-items" style={opened ? { maxHeight: "120px" } : { maxHeight: "0px" }}>
        {options.map((item, index) => {
          return (
            <li
              onClick={() => {
                onClickHandler(item, index);
              }}
              style={current === index ? { background: "#212b45" } : {}}
            >
              <p>{item.heading}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
