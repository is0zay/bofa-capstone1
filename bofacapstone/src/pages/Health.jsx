import React from "react";
import { Link } from "react-router-dom";
import "./health.css";
import "./aboutImportance.css";
import Divider from "../components/homeDivider";
import BlueDivider from "../components/blueDivider";

const Health = () => {
    return (
        <div>
          <BlueDivider
            title="Access to Healthier Lives"
            imageUrl=""
            body="It's truly heart-wrenching to acknowledge that countless communities across the United States are grappling with the profound challenge of insufficient access to the essentials required for leading healthier lives. This issue has particularly deep-rooted consequences in communities of color, where historical disparities have led to persistently poorer health outcomes. "
            info="Our unwavering focus lies on supporting programs and organizations dedicated to tackling the economic and social factors that impact family well-being and access to healthcare. This encompasses vital facets such as community-based health services, crisis prevention linked to family stability initiatives, and other poverty-related concerns."
          />
            <div className="importance-image">
              <div className="importance-text">
                <h2 className="importance-subtitle">Health Intiatives</h2>
    
                <ul className="importance-list">
                  <li>
                 <span className="bold-text">Prevention and Enhanced Healthcare Access:</span>  We champion services that actively enhance health outcomes, placing a significant emphasis on community-based healthcare.
                   This involves offering mental health counseling, substance use disorder treatment, and rehabilitation. Additionally, we work towards breaking down barriers to quality healthcare, encompassing early detection and disease prevention.
                    To strengthen this, we invest in capacity building and training for local community-based health centers and clinics.
                    </li>
                  <li>
                  <span className="bold-text"> Nutrition and Food Accessibility: </span> We firmly believe that nutrition is a cornerstone of good health. 
                  Thus, we actively support initiatives that forge partnerships between food and healthcare, promoting access to fresh and nutritious food. 
                  Furthermore, we are committed to addressing the dietary nutritional needs of individuals with underlying health conditions, such as diabetes, cancer, and heart health, by providing education and resources.
                  </li>
                  <li>
                  <span className="bold-text">  Family Stability: </span> Our dedication extends to facilitating access to crisis prevention programs and wraparound services. 
                  These services encompass immediate and secure shelter, as well as assistance in accessing free or subsidized benefits like internet connectivity, utilities, childcare, transportation, financial aid, and recovery support.
                  </li>
                  <li>
                  <span className="bold-text">  Support for the Homeless: </span> We recognize the urgency of addressing homelessness. 
                  Hence, we fund programs aimed at both preventing and ending homelessness. 
                  These encompass emergency shelter facilities, rapid rehousing initiatives, rental and utility assistance programs, and the development of permanent supportive housing, all with the goal of providing enduring solutions for those experiencing homelessness.
                  </li>
                </ul>
              </div>
          <div className="importance-image">
            <img
              src="/health/health.png" 
              alt="Depicts Health"
              className="jobsImg"
            />
          </div>
          <div className="importance-section">
            </div>
            <Divider
              imageUrl=""
              title="Our Mission"
              body="Our mission is rooted in empathy and the earnest desire to alleviate the hardships faced by individuals and families who are disproportionately impacted by these challenges. "
              info="We firmly believe that by addressing these fundamental issues, we can pave the way for healthier, more equitable lives for all."
            />
          </div>
          <div className="jobsImgContainer">
              <img
                src="/health/health2.png"
                alt="Depicts Health"
                className="jobsImg"
              />
              <div className="jobsText2">
                {/* <h2 className="jobsTitle"></h2> */}
                <p className="jobsDescription">
                We are deeply committed to improving access to healthcare and promoting overall well-being. 
                To discover how we're making a difference and how you can get involved, contact us today.  <p></p> 
                </p>
                <button className="contact-button">
          <Link to="/contact">Contact Us</Link>
        </button>
              </div>
            </div>
        </div>
      );
    };
    


export default Health