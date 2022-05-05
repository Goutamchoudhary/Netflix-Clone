import React from "react";
import "./JumbotronStyles.css";

const JumboSubTitle = ({ children, ...restProps }) => {
  return (
    <h2 className="jumbo-subtitle" {...restProps}>
      {children}
    </h2>
  );
}

export default JumboSubTitle;
