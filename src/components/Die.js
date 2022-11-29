import React from "react";

const Die = ({ value, id, isHeld, holdDice }) => {
  const styles = {
    backgroundColor: isHeld ? "#59E391" : "white",
  };

  const handleClick = () => {
    holdDice(id);
  };

  return (
    <div className="die-face" style={styles} onClick={handleClick}>
      <h2 className="die-num">{value}</h2>
    </div>
  );
};

export default Die;
