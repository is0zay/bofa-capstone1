import React from "react";
import "./home.css";
import Card from "../components/homeCard";
import Divider from "../components/homeDivider";
import BlueDivider from "../components/blueDivider";
import Button from "../components/buttonLink";

const Home = () => {
  return (
    <div>
      {/* <h1>What Would You Like The Power To Do?</h1> */}

      <div className="hero-container">
        <video autoPlay muted loop>
          <source
            src="/homePhotos/boa.mp4"
            type="video/mp4"
            alt="Philanthropic Strategy Video"
          />
        </video>
        <div className="videoOverlay">What Would You Like The Power To Do?</div>
      </div>

      <BlueDivider
        imageUrl="./homePhotos/fruitpopsicles.jpg"
        title="Have Access to Healthy Foods."
        body="Numerous localities throughout the United States lack proper access to the necessities for leading more healthful lives. In areas predominantly inhabited by people of color, prolonged periods of limited access to healthcare and wellness resources have played a role in inferior health results. Our attention is directed towards initiatives and groups that are striving to tackle the economic and societal factors impacting both family well-being and health accessibility. This encompasses approaches to attaining community-centered healthcare services, preemptive measures for averting crises linked to programs promoting family steadiness, and the broader array of concerns stemming from poverty."
        info="Amidst the challenges faced by the homeless, our commitment remains steadfast. We're dedicated to implementing programs that not only provide emergency shelter but also pave the way to self-sufficiency. From rapid-rehousing to rental and utility assistance, our efforts are grounded in the belief that everyone deserves a stable foundation. Permanent supportive housing becomes a reality, creating a haven where dignity and well-being flourish.

In each endeavor, compassion is our driving force, uniting us in the shared goal of fostering healthier lives and more resilient communities."
      />

      <div className="options">
        <Card
          title="Help With Health"
          imageUrl="./homePhotos/healthImage.jpg"
          body="We provide compassionate care that enhances health outcomes, prioritizing community-centered healthcare, empathetic mental health assistance, effective substance use disorder treatment, and rehabilitation services. Our initiatives address quality healthcare access, including early detection and disease prevention. Furthermore, we empower local community-based health centers and clinics through comprehensive training, fostering holistic well-being."
        />
        <Card
          title="Help With Jobs"
          imageUrl="./homePhotos/jobs.jpg"
          body="
          Nonprofit organizations extend a caring hand to individuals facing exceptional challenges on their path to employment. These compassionate initiatives provide vital support, including dedicated case management for those with disabilities, aiding the formerly incarcerated in rebuilding their lives, offering valuable ESL training, and nurturing the talents of foster care youth. "
        />
        <Card
          title="Stay In The Know"
          imageUrl="./homePhotos/news.jpg"
          body="
        This approach encompasses economic mobility, racial equality, and social advancement, all directed towards the betterment of the community. Our commitment goes beyond surface-level actions – we strive to create genuine and lasting positive change that tackles society's most pressing issues. This entails harnessing our financial resources, shaping client products and services, contributing to philanthropic endeavors, and steering our own activities towards sustainable progress."
        />
      </div>

      <Divider
        title="Have Access to More Opportunities."
        imageUrl="./homePhotos/connect.jpg"
        body="Embedded within our efforts, we forge robust alliances with nonprofit organizations deeply committed to addressing core aspects of economic advancement within low- and moderate-income communities. Our focus lies in elevating the well-being of individuals and families through strategic investments in health, employment opportunities, and bolstering the overall vigor of communities. We direct attention towards enhancing small business resilience and fostering community development to create a more vibrant and resilient societal fabric.
            These partnerships serve as a pillar of support for vulnerable segments of society, encompassing working families, young individuals, seniors, persons with disabilities, veterans, and those touched by the criminal justice system. By collaborating closely, we empower these groups to stride confidently towards their aspirations."
        info="We stand hand in hand with nonprofit programs dedicated to guiding students towards their dreams, irrespective of background. Our support extends particularly to first-generation, low-income, and differently-abled students, amplifying opportunities for success, including certificates and degrees, shaping tomorrow's leaders."
      />
      <Button to="./home/jobs" text="Click Me!" />
    </div>
  );
};

export default Home;
