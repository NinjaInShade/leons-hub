// Libraries
import React, { useState } from "react";
import { useSpring, animated, config } from "react-spring";

// CSS
import "../../css/Settings.css";

// Components
import Page from "../../components/layout/Page";
import Card from "../../components/layout/Card";
import InputBox from "../../components/general/InputBox";
import Button from "../../components/general/Button";
import Dropdown from "../../components/general/Dropdown";

// Images
import UserTemplate from "../../resources/images/UserTemplate.svg";

const colour_dropdown_settings = [
  { heading: "Dark", stateValue: "0" },
  { heading: "Light", stateValue: "1" },
];
const background_dropdown_settings = [
  { heading: "Tech", stateValue: "0" },
  { heading: "Geometry", stateValue: "1" },
];

export default function Settings() {
  // User settings state
  const [profilePicture, setProfilePicture] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  // App settings state
  const [colourTheme, setColourTheme] = useState("");
  const [background, setBackground] = useState("");

  const fromBottom = useSpring({ bottom: "0vh", from: { bottom: "-100vh" }, config: { ...config.slow } });

  function saveUser() {
    // Send to backend - TEMP CODE
    console.log(profilePicture);
  }

  function saveApp() {
    // Send to backend - TEMP CODE
    console.log(colourTheme);
    console.log(background);
  }

  function choosePicture() {
    // Select picture logic
    setProfilePicture("test");
  }

  return (
    <Page name="settings" heading="Settings">
      <animated.div className="settings-container" style={fromBottom}>
        <div>
          <Card className="settings-card">
            <div className="heading">
              <h1>User settings</h1>
              <hr />
            </div>
            <h3>Profile Picture</h3>
            <img
              src={UserTemplate}
              alt="User profile template icon"
              onClick={() => {
                choosePicture();
              }}
            />

            <InputBox label="Email" type="email" placeholder="Enter your new email" value={emailValue} onChange={setEmailValue} />
            <InputBox label="Username" placeholder="Enter a new username" value={usernameValue} onChange={setUsernameValue} />
            <InputBox label="Password" type="password" placeholder="Enter your new password" value={passwordValue} onChange={setPasswordValue} />
          </Card>
          <Button onClick={saveUser}>Save user preferences</Button>
        </div>
        <div>
          <Card className="settings-card">
            <div className="heading">
              <h1>App settings</h1>
              <hr />
            </div>
            <Dropdown heading="Colour Theme" options={colour_dropdown_settings} callback={setColourTheme} />
            <Dropdown heading="Background" options={background_dropdown_settings} callback={setBackground} />
          </Card>
          <Button onClick={saveApp}>Save app preferences</Button>
        </div>
      </animated.div>
    </Page>
  );
}
