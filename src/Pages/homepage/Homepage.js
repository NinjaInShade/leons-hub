// Libraries
import React from "react";

// CSS
import "../.././css/Homepage.css";

// Images
import Blob1 from "../../resources/svgs/Blob1.svg";
import Blob2 from "../../resources/svgs/Blob2.svg";
import Blob3 from "../../resources/svgs/Blob3.svg";

// Components
import Card from "../.././components/layout/Card";

export default function Homepage() {
  return (
    <div className="homepage">
      <header className="heading">
        <h1>Leon's Portal</h1>
        <hr />
      </header>
      <section className="navigation">
        <div className="blob-container">
          <Card>
            <i className="fab fa-wikipedia-w"></i>
            <h2>Wikipedia</h2>
          </Card>
          <img src={Blob3} alt="blob" className="blob blob3" />
        </div>
        <Card>
          <span className="iconify" data-inline="false" data-icon="ri:calendar-todo-fill"></span>
          <h2>To-Do</h2>
        </Card>
        <div className="blob-container">
          <Card>
            <i className="fas fa-info-circle"></i>
            <h2>About</h2>
          </Card>
          <img src={Blob1} alt="blob" className="blob blob1" />
        </div>
        <Card>
          <i className="fas fa-laptop-code"></i>
          <h2>Code</h2>
        </Card>
        <div className="blob-container">
          <Card>
            <i className="fas fa-book"></i>
            <h2>Books</h2>
          </Card>
          <img src={Blob2} alt="blob" className="blob blob2" />
        </div>
        <Card>
          <i className="fas fa-cog"></i>
          <h2>Settings</h2>
        </Card>
      </section>
    </div>
  );
}
