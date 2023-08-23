import React from "react";
import "./aboutHistory.css";
import BlueDivider from "../components/blueDivider";
import AboutBox from "../components/aboutBox";

const AboutHistory = () => {
  return (
    <div>
      <BlueDivider
        imgUrl=""
        title="Why We Chose Economic mobility focused on needs of individuals and families"
        body="This initiative brings forth an impact on us and our community"
        info="ae. Id illo quisquam ducimus omnis libero perspiciatis
          ab recusandae illum odit. Odio delectus molestiae, dolore veritatis
          deleniti ad similique animi, voluptatum a distinctio illo doloribus
          tempore vero, eligendi eius aliquam earum. Dolorum reiciendis atque
          officiis perspiciatis inventore. Eligendi modi molestias distinctio
          laudantium? Dolorum dolore nostrum ut mo"
      />
      <AboutBox
        img="/about/uptown.jpeg"
        title="Economy for Individuals and Family"
        info="Id illo quisquam ducimus omnis libero perspiciatis
          ab recusandae illum odit. Odio delectus molestiae, dolore veritatis
          deleniti ad similique animi, voluptatum a distinctio illo doloribus
          tempore vero, eligendi"
      />

      <p> Information for the about page goes here </p>
    </div>
  );
};
export default AboutHistory;
