import { useEffect, useState } from "react";

import styles from "./Experience.module.sass";

import axios from "axios";

import { motion } from "framer-motion";
import { useSectionInView } from "../../hooks/useSectionInView";
import { EXPERIENCE } from "../../store/store";

const blockLeftAnimation = {
  hidden: {
    x: 200,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
};

const blockRightAnimation = {
  hidden: {
    x: -200,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
};

const Experience = () => {
  const { ref } = useSectionInView("Experience");
  const [experiences, setExperiences] = useState([]);
  const getExperiences = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_REACT_APP_STRAPI_API_URL}/api/experiences/`
    );
    console.log(data.data.map((experience) => experience.attributes));
    setExperiences(data.data.map((experience) => experience.attributes));
  };

  useEffect(() => {
    getExperiences();
  }, []);

  return (
    <section ref={ref} className={styles.experience_wrapper} id="experience">
      <h2>My Experience</h2>
      <div className={styles.experiences}>
        <div className={styles.line}></div>
        {/* {experiences.length > 0 &&
          experiences.map((experience, index) => {
            return (
              <div
                key={experience.position}
                className={`${styles.experience} ${
                  (index + 1) % 2 === 0
                    ? styles.experience_right
                    : styles.experience_left
                }`}
              >
                <motion.div
                  className={styles.experience_card}
                  initial="hidden"
                  whileInView={"visible"}
                  variants={
                    (index + 1) % 2 === 0
                      ? blockLeftAnimation
                      : blockRightAnimation
                  }
                >
                  <h3>{experience.position}</h3>
                  <p className={styles.company}>{experience.workPlace}</p>
                  <p className={styles.description}>{experience.description}</p>
                  <p className={styles.date}>{experience.dateSpan}</p>
                </motion.div>
                <div className={styles.circle}></div>
                <p className={styles.date}>{experience.dateSpan}</p>
              </div>
            );
          })} */}

        {EXPERIENCE.length > 0 &&
          EXPERIENCE.map((experience, index) => {
            return (
              <div
                key={experience.position}
                className={`${styles.experience} ${
                  (index + 1) % 2 === 0
                    ? styles.experience_right
                    : styles.experience_left
                }`}
              >
                <motion.div
                  className={styles.experience_card}
                  initial="hidden"
                  whileInView={"visible"}
                  variants={
                    (index + 1) % 2 === 0
                      ? blockLeftAnimation
                      : blockRightAnimation
                  }
                >
                  <h3>{experience.position}</h3>
                  <p className={styles.company}>{experience.workPlace}</p>
                  <p className={styles.description} dangerouslySetInnerHTML={{__html: experience.description}}></p>
                  <p className={styles.date}>{experience.dateSpan}</p>
                </motion.div>
                <div className={styles.circle}></div>
                <p className={styles.date}>{experience.dateSpan}</p>
              </div>
            );
          })}
        {/* {experiences.length === 0 && <p>No data found (refresh strapi)</p>} */}
      </div>
    </section>
  );
};

export default Experience;
