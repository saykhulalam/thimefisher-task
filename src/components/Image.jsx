import React from "react";

const Image = ({ src, className }) => {
  return (
    <div>
      <img className={`${className}`} src={src} alt="image" />
    </div>
  );
};

export default Image;
