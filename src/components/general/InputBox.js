// Libraries
import React, { useState } from "react";

// CSS
import "../../css/InputBox.css";

export default function InputBox({ label, type = "text", placeholder, value, onChange }) {
  return (
    <div className="inputbox-container">
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        value={value}
      />
    </div>
  );
}
