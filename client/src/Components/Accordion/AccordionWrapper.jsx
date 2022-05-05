import React from "react";
import "./AccordionStyles.css";

const AccordionWrapper = ({ children, ...restProps }) => {
  return (
    <section className="accordion-wrapper" {...restProps}>
      {children}
    </section>
  );
}

export default AccordionWrapper;
