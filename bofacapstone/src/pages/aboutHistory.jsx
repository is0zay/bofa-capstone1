import React from "react";
import BlueDivider from "../components/blueDivider";
import AboutBox from "../components/aboutBox";
import Divider from "../components/homeDivider";

const AboutHistory = () => {
  return (
    <div>
      <BlueDivider
        imgUrl=""
        title="Economic Mobility Focused On Needs Of Individuals And Families"
        body="This initiative brings forth an impact on us and our community"
        info="In an age where a one-size-fits-all approach falls short, our commitment to economic mobility rooted in the needs of individuals and families is resolute. We're not just financial partners; we're co-navigators of aspirations, enabling dreams to take flight, regardless of the destination. By fostering economic growth on a personal level, we contribute to the prosperity of communities at large. Our vision is not limited to financial transactions; it encompasses transformation, empowerment, and a brighter future for everyone we touch."
      />
      <AboutBox
        img="/about/uptown.jpeg"
        title="Economy for Individuals and Family"
        info="We are dedicated to making a positive impact on the lives of individuals and families. Our approach involves investing in healthcare and job opportunities while also working to strengthen communities at large. "
      />

      <Divider
        imgUrl=""
        title="Why We Chose Economic mobility focused on needs of individuals and families"
        body="This initiative brings forth an impact on us and our community"
        info="In an age where a one-size-fits-all approach falls short, our commitment to economic mobility rooted in the needs of individuals and families is resolute. We're not just financial partners; we're co-navigators of aspirations, enabling dreams to take flight, regardless of the destination. By fostering economic growth on a personal level, we contribute to the prosperity of communities at large. Our vision is not limited to financial transactions; it encompasses transformation, empowerment, and a brighter future for everyone we touch."
      />
    </div>
  );
};
export default AboutHistory;
