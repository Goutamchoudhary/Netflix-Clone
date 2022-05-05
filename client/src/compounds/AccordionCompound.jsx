import React from "react";
import AccordionWrapper from "../Components/Accordion/AccordionWrapper";
import AccordionTitle from "../Components/Accordion/AccordionTitle";
import AccordionItem from "../Components/Accordion/AccordionItem";
import AccordionHeader from "../Components/Accordion/AccordionHeader";
import AccordionBody from "../Components/Accordion/AccordionBody";
import FAQData from "../data/faqs.json";

const AccordionCompound = () => {
  return (
    <AccordionWrapper>
      <AccordionTitle>Frequently Asked Questions</AccordionTitle>
      {FAQData.map((item) => (
        <AccordionItem key={item.id}>
          <AccordionHeader>{item.header}</AccordionHeader>
          <AccordionBody>{item.body}</AccordionBody>
        </AccordionItem>
      ))}
    </AccordionWrapper>
  );
}

export default AccordionCompound;
