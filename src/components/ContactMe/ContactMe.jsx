import React, { useState } from "react";
import { useSectionInView } from "../../hooks/useSectionInView";
import emailjs from "emailjs-com";
import styles from "./ContactMe.module.sass";

const ContactMe = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { ref } = useSectionInView("Contact");

  const sendEmail = async (e) => {
    e.preventDefault();
    if (email === "" || message === "") return;
    try {
      console.log(
        import.meta.env.VITE_REACT_APP_SERVICE_ID,
        import.meta.env.VITE_REACT_APP_TEMPLATE_ID
      );
      await emailjs.send(
        import.meta.env.VITE_REACT_APP_SERVICE_ID,
        import.meta.env.VITE_REACT_APP_TEMPLATE_ID,
        {
          message: message,
          email: email,
        },
        import.meta.env.VITE_REACT_APP_USER_PUBLIC_KEY
      );
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };
  return (
    <section ref={ref} className={styles.contact_wrapper} id={"contact"}>
      <h2>Contact me</h2>
      <p>
        Please contact me directly at <span>gjevstratov@gmail.com</span> or
        through this form.
      </p>
      <form onSubmit={(e) => sendEmail(e)}>
        <input
          type="email"
          placeholder="Your email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <textarea
          placeholder="Your message"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default ContactMe;
