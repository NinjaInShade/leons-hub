// Libraries
import React from "react";

// CSS
import "../../css/Card.css";

export default function Card({ children, className }) {
  return <div className={`card ${className}`}>{children}</div>;
}
