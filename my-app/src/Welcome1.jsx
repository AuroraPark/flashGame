import React from "react";

const WelcomePage = (props) => {
  return (
    <div>
      <h1>Welcome to the game, {props.username}</h1>
    </div>
  );
};

export default WelcomePage;
