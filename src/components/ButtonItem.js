import React from "react";
import Button from "./Button";

const ButtonItem = () => {
  return (
    <div className="button-box">
      <Button type="button" className="button">
        Sign In
      </Button>
      <Button type="button" className="button">
        Sign Up
      </Button>
    </div>
  );
};

export default ButtonItem;
