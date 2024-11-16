import React, { useState } from "react";

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggleSwitch = () => {
    setIsOn(!isOn);
  };

  const checkIsOn = isOn ? "ON" : "OFF";

  return (
    <>
      <div
        className="toggle-switch"
        onClick={handleToggleSwitch}
        style={{
          backgroundColor: isOn ? "rgb(13, 201, 13)" : "rgb(255, 100, 100)",
        }}
      >
        <div className={`switch-state ${checkIsOn}`}>
          <span className="switch">{checkIsOn}</span>
        </div>
      </div>
    </>
  );
};

export default ToggleSwitch;
