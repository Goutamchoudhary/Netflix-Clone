import React from "react";
import "./JumbotronStyles.css";

const JumboImage = ({ ...restProps }) => {
  return <img className="jumbo-image" alt="" {...restProps} />;
}

export default JumboImage;
