import React from "react";
import "./header.css";
import LeftArrow from "../../assets/LeftArrow";
import Circles from "../../assets/Circles";

const Header: React.FC<any> = ({ color }) => {
  return (
    <header style={{ color }}>
      <div className="arrow-container">
        <LeftArrow />
        <span>Back</span>
      </div>
      <h2>Photo Gallery</h2>
      <Circles />
    </header>
  );
};

export default Header;
