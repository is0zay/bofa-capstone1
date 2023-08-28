import React, { useState } from "react";
import './contact.css';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name.trim() === "" || email.trim() === "" || subject.trim() === "" || message.trim() === "") {
      alert("Please fill in all fields");
      return;
    }

    // Submit the form
    // Add your form submission logic here

    alert("Form submitted successfully!");

    // Clear form fields
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <div id="contact-page" className="shared-styles">
      <section id="form-details">
        <form onSubmit={handleSubmit}>
          <h2>Contact Us</h2>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Enter your Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
          <textarea
            rows="10"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button type="submit" className="normal">
            Submit
          </button>
        </form>

        <div className="people">
          <div>
          <img src="/contact/Yonathan.jpeg" alt="Yonathan" />
            <p>
              <span>Yonathan Getachew</span> Apprentice <br /> Phone: 908-854-7012 <br /> Email: ygetachew13@r2happrentice.org
            </p>
          </div>
          <div>
            <img src="/contact/Aishah.png" alt="Aishah" />
            <p>
              <span>Aishah Isom</span> Apprentice <br /> Phone: 908-321-4532 <br /> Email: aisom13@r2happrentice.org
            </p>
          </div>
          <div>
            <img src="/contact/Kellis.jpg" alt="Kellis" />
            <p>
              <span>Kellis Somerville</span> Apprentice <br /> Phone: 908-897-4950 <br /> Email: ksomerville13@r2happrentice.org
            </p>
          </div>
          <div>
            <img src="/contact/Avyanna3.png" alt="Avyanna" />
            <p>
              <span>Avyanna King</span> Apprentice <br /> Phone: 908-543-4230 <br /> Email: aking13@r2happrentice.org
            </p>
          </div>
          <div>
            <img src="/contact/Isaiah.jpeg" alt="Isaiah" />
            <p>
              <span>Isaiah Shembo</span> Apprentice <br /> Phone: 908-234-5473 <br /> Email: ishembo13@r2happrentice.org
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
