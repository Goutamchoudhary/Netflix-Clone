import React from "react";
import "./JumbotronStyles.css";

const JumboImageWrapper = ({ children, ...restProps }) => {
  return (
    <div className="jumbo-imagewrapper" {...restProps}>
      {children}
    </div>
  );
}

export default JumboImageWrapper;
