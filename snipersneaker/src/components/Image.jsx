import React from "react";

const Image = (props) => {
  let { alt, src, className } = props;
  return (
    <img
      alt={alt}
      src={src}
      className={className}
      loading="lazy"
      placeholder="wait"
    />
  );
};

export default Image;
