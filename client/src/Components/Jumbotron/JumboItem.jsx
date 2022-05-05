import React from "react";
import "./JumbotronStyles.css";

const JumboItem = ({ children, ...restProps }) => {
  return (
    <div className="jumbo-item" {...restProps}>
      {children}
    </div>
  );
}

export default JumboItem;
