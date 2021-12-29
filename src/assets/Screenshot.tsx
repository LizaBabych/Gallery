import React from "react";

const Screenshot: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <svg
      onClick={onClick}
      width="134"
      height="134"
      viewBox="0 0 134 134"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="67" cy="67" r="67" fill="#DFDFDF" fillOpacity="0.43" />
      <circle
        cx="67"
        cy="67"
        r="44.5"
        fill="white"
        stroke="#1DABD1"
        strokeWidth="9"
      />
    </svg>
  );
};

export default Screenshot;
