import React from "react";

const Pencil: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <svg
      onClick={onClick}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.2214 3.27762L14.722 7.77821L4.9492 17.551L0.936568 17.994C0.399395 18.0534 -0.0544605 17.5992 0.00530355 17.062L0.451776 13.0466L10.2214 3.27762ZM17.5056 2.60756L15.3924 0.494372C14.7333 -0.164791 13.6642 -0.164791 13.005 0.494372L11.017 2.48241L15.5176 6.98299L17.5056 4.99496C18.1648 4.33544 18.1648 3.26672 17.5056 2.60756Z"
        fill="white"
      />
    </svg>
  );
};

export default Pencil;
