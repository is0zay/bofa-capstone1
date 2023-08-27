import React from "react";
// import BlueDivider from "../components/blueDivider";
import AboutBox from "../components/aboutBox";
import Divider from "../components/homeDivider";
import InfoSection from "../components/infoSection";
const About = () => {
  return (
    <div>
      <Divider
        imgUrl=""
        title="Welcome"
        body="We are a a dedicated team committed to improving lives, fostering community vitality, and driving positive change. Our mission is to make a meaningful impact by investing in health, job opportunities, small business resilience, and community development."
        info="In an age where a one-size-fits-all approach falls short, our commitment to economic mobility rooted in the needs of individuals and families is resolute. We're not just financial partners; we're co-navigators of aspirations, enabling dreams to take flight, regardless of the destination. By fostering economic growth on a personal level, we contribute to the prosperity of communities at large. Our vision is not limited to financial transactions; it encompasses transformation, empowerment, and a brighter future for everyone we touch."
      />
      <AboutBox
        img="/about/hands2.jpg"
        title="Our Vision"
        info="We envision a future where individuals and families thrive, small businesses prosper, and communities flourish. Through our strategic investments and collaborative efforts, we aspire to create a positive ripple effect that spreads well-being, growth, and prosperity. "
      />

     

      <InfoSection
        imgUrl="/homePhotos/handsOnTree.jpg"
        title="Our Mission"
        info="Our primary mission is to enhance the lives of individuals and families. We believe in the power of investing in the fundamental pillars that contribute to a thriving society. Our focus areas include: Health and Wellness: We're dedicated to promoting better health for all. Through strategic initiatives and partnerships, we aim to provide access to quality healthcare resources and information that empower individuals to lead healthier lives.
        mployment Opportunities: We understand the significance of meaningful work in people's lives. Our efforts include collaborating with local businesses, organizations, and institutions to create job opportunities that foster personal and professional growth.
        "
      />

      <AboutBox
        img="/about/uptown.jpeg"
        title="Get Involved"
        info="We invite you to join us in this journey of transformation. Whether you're an individual seeking resources, a business looking to partner, or a community member with ideas, we welcome your involvement. Together, we can create a brighter, more resilient, and prosperous future."
      />
    </div>
  );
};

export default About;
