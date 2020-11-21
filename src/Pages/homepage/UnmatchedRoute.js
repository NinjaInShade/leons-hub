// Libraries
import React from "react";
import { Link } from "react-router-dom";

// CSS
import "../../css/UnmatchedRoute.css";

// Images
import img1 from "../../resources/images/404_1.png";
import img2 from "../../resources/images/404_2.png";
import img3 from "../../resources/images/404_3.png";
import img4 from "../../resources/images/404_4.png";
import img5 from "../../resources/images/404_5.png";
import img6 from "../../resources/images/404_6.svg";
import img7 from "../../resources/images/404_7.svg";
import img8 from "../../resources/images/404_8.svg";

export default function UnmatchedRoute() {
  let image_paths = [img1, img2, img3, img4, img5, img6, img7, img8];

  let random = Math.floor(Math.random() * image_paths.length);
  let image = image_paths[random];

  return (
    <section className="unmatched">
      <h1>There's nothing here</h1>
      <p>
        If you came here by mistake, click <Link to="/">here</Link> to go back
      </p>
      <img src={image} alt="404 Page not found illustration" />
    </section>
  );
}
