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
          <img src="" alt="John Doe" />
          <p>
            <span>John Doe</span> Manager <br /> Phone: +91 1234567890 <br /> Email: contact@example.com
          </p>
        </div>
        <div>
          <img src="" alt="John Doe" />
          <p>
            <span>John Doe</span> Manager <br /> Phone: +91 1234567890 <br /> Email: contact@example.com
          </p>
        </div>
        <div>
          <img src="" alt="Jean Doe" />
          <p>
            <span>Jean Doe</span> Manager <br /> Phone: +91 1234567890 <br /> Email: contact@example.com
          </p>
        </div>
        <div>
          <img src="" alt="Jean Doe" />
          <p>
            <span>Jean Doe</span> Manager <br /> Phone: +91 1234567890 <br /> Email: contact@example.com
          </p>
        </div>
        <div>
          <img src="" alt="Jean Doe" />
          <p>
            <span>Jean Doe</span> Manager <br /> Phone: +91 1234567890 <br /> Email: contact@example.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
