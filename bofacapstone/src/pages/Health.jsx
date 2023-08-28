import React from "react";
import "./health.css";
import "./aboutImportance.css";
import Divider from "../components/homeDivider";
import BlueDivider from "../components/blueDivider";

const Health = () => {
    return (
        <div>
          <Divider
            title="Assisting With Jobs"
            imageUrl="./homePhotos/connect.jpg"
            body="The 'Neighborhood Builders' initiative, focuses on supporting small businesses and entrepreneurs. Bank of America provides financial resources, mentorship, and expertise to help these businesses grow and create sustainable jobs within their communities. By investing in local enterprises, the bank stimulates economic development and empowers individuals to become self-sufficient and contribute to their local economies."
            info="We stand hand in hand with nonprofit programs dedicated to guiding students towards their dreams, irrespective of background. Our support extends particularly to first-generation, low-income, and differently-abled students, amplifying opportunities for success, including certificates and degrees, shaping tomorrow's leaders."
          />
          <div className="importance-image">
            <img
              src="/homePhotos/peopleTalking.jpg"
              alt="Depicts Health"
              className="jobsImg"
            />
          </div>
          <div className="importance-section">
            <div className="importance-image">
              <div className="importance-text">
                <h2 className="importance-subtitle">Job Resources</h2>
    
                <ul className="importance-list">
                  <li>
                    Community Partnerships: Bank of America collaborates with
                    various community organizations, nonprofits, and educational
                    institutions to expand its reach and impact. The bank leverages
                    shared resources and expertise to create comprehensive programs
                    that address specific workforce needs and promote economic
                    mobility.
                  </li>
                  <li>
                    Pathways Program: Bank of America's Pathways program offers
                    online training resources, including modules and courses that
                    focus on developing skills in areas such as leadership,
                    technology, and customer service.
                  </li>
                  <li>
                    Mentorship and Networking: The bank connects participants in the
                    Pathways program with experienced professionals who serve as
                    mentors, providing guidance and support throughout their career
                    development journey.
                  </li>
                  <li>
                    Job Fairs and Recruitment Events: Bank of America hosts job
                    fairs and recruitment events to connect job seekers with
                    employment opportunities within the bank and its partner
                    organizations to explore career options, submit applications,
                    and engage with recruiters directly.
                  </li>
                </ul>
              </div>
              <div className="importance-text">
                <h2 className="importance-subtitle">Job Tips</h2>
    
                <ul className="importance-list">
                  <li>
                    Resume Building: Guidance on crafting an effective resume that
                    highlights relevant skills, experiences, and achievements. This
                    may include tips on formatting, language, and tailoring the
                    resume to specific job requirements.
                  </li>
                  <li>
                    Interview Preparation: Strategies for successful interview
                    preparation, including tips on researching the company,
                    practicing common interview questions, and developing compelling
                    responses that showcase skills and qualifications.
                  </li>
                  <li>
                    Skill Development: Recommendations on acquiring and enhancing
                    skills that are in demand within the job market, such as
                    technical proficiency, project management, communication, or
                    leadership abilities. This may involve suggesting relevant
                    online courses, certifications, or workshops
                  </li>
                  <li>
                    Financial Readiness: Resources on managing personal finances
                    during the job search process, including budgeting, savings
                    strategies, and understanding financial benefits associated with
                    employment.
                  </li>
                </ul>
              </div>
            </div>
            <div className="jobsImgContainer">
              <img
                src="/homePhotos/jobsBackground.jpeg"
                alt="Depicts Health"
                className="jobsImg"
              />
              <div className="jobsText">
                <h2 className="jobsTitle">Jobs and Workforce Development</h2>
                <p className="jobsDescription">
                  Bank of America's programs for economic mobility regarding jobs
                  and employment encompass a range of initiatives designed to
                  address specific needs and challenges faced by individuals and
                  communities. The "Pathways" program, for instance, aims to bridge
                  the skills gap by offering job training and career development
                  opportunities. Participants in this program receive access to
                  training modules, mentorship from experienced professionals, and
                  networking opportunities, enabling them to enhance their skill
                  sets and increase their employability.
                </p>
              </div>
            </div>
            <BlueDivider
              imageUrl=""
              title="Our Vision"
              body="Our primary mission is to enhance the lives of individuals and families. We believe in the power of investing in the fundamental pillars that contribute to a thriving society. Our focus areas include:"
              info="Health and Wellness: We're dedicated to promoting better health for all. Through strategic initiatives and partnerships, we aim to provide access to quality healthcare resources and information that empower individuals to lead healthier lives.
            mployment Opportunities: We understand the significance of meaningful work in people's lives. Our efforts include collaborating with local businesses, organizations, and institutions to create job opportunities that foster personal and professional growth.
            "
            />
          </div>
        </div>
      );
    };
    


export default Health