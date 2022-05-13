import React from "react";
import JumboWrapper from "../Components/Jumbotron/JumboWrapper";
import JumboItem from "../Components/Jumbotron/JumboItem";
import JumboTextWrapper from "../Components/Jumbotron/JumpoTextWrapper";
import JumboTitle from "../Components/Jumbotron/JumboTitle";
import JumboSubTitle from "../Components/Jumbotron/JumboSubTitle";
import JumboImageWrapper from "../Components/Jumbotron/JumboImageWrapper";
import JumboImage from "../Components/Jumbotron/JumboImage";
import JumboData from "../data/jumbo.json";
import Seperator from "../Components/Seperator/Seperator";

const JumboCompound = () => {
  return (
    <JumboWrapper>
      {JumboData.map((item) => (
        <>
          <JumboItem key={item.id} direction={item.direction}>
            <JumboTextWrapper>
              <JumboTitle>{item.title}</JumboTitle>
              <JumboSubTitle>{item.subTitle}</JumboSubTitle>
            </JumboTextWrapper>
            <JumboImageWrapper>
              <JumboImage src={item.image} alt={item.alt} />
            </JumboImageWrapper>
          </JumboItem>
          <Seperator />
        </>
      ))}
    </JumboWrapper>
  );
}

export default JumboCompound;
