// Libraries
import React from "react";

// CSS
import "../../css/Card.css";

export default function Card({ children, style }) {
  return (
    <div className="card" style={style}>
      {children}
    </div>
  );
}
