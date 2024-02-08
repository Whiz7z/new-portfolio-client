import { useState } from "react";
import { useSectionInView } from "../../hooks/useSectionInView";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

import { MdOutlineDone } from "react-icons/md";
import styles from "./ContactMe.module.sass";

const ContactMe = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const { ref } = useSectionInView("Contact");

  const sendEmail = async (e) => {
    e.preventDefault();
    if (email === "" || message === "") {
      setIsEmpty(true);
      return;
    }

    setSubmitting(true);
    await emailjs
      .send(
        import.meta.env.VITE_REACT_APP_SERVICE_ID,
        import.meta.env.VITE_REACT_APP_TEMPLATE_ID,
        {
          message: message,
          email: email,
        },
        import.meta.env.VITE_REACT_APP_USER_PUBLIC_KEY
      )
      .then(() => {
        setSubmitting(false);
        setSuccess(true);
        setEmail("");
        setMessage("");

        setTimeout(() => {
          setSuccess(false);
        }, 5000);
      });

    //setSubmitting(false);

    // setSuccess(true);
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
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          onFocus={() => setIsEmpty(false)}
          value={email}
        />
        <textarea
          placeholder="Your message"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          onFocus={() => setIsEmpty(false)}
          value={message}
        ></textarea>
        <button type="submit">
          {submitting ? "Sending..." : "Send"}
          <motion.span
            className={styles.success}
            animate={success ? { opacity: 1, x: 70 } : { opacity: 0, x: 0 }}
          >
            <MdOutlineDone className={styles.done} />
          </motion.span>
          <motion.span
            className={styles.empty_error}
            animate={isEmpty ? { opacity: 1, x: 70 } : { opacity: 0, x: 0 }}
          >
            Fields are empty
          </motion.span>
        </button>
      </form>
    </section>
  );
};

export default ContactMe;
