import React, { useEffect, useState } from "react";

import Magnetic from "../Animation/Magnetic";

import axios from "axios";

import styles from "./Skills.module.sass";
import { useSectionInView } from "../../hooks/useSectionInView";

// let SKILLS = [
//   "React",
//   "HTML",
//   "CSS",
//   "Next.js",
//   "SASS",
//   "Mongo",
//   "SQL",
//   "Express",
//   "Socket.io",
//   "Java Script",
//   "Redux",
//   "Node.js",
//   "Git",
//   "JWT",
//   "Zustand",
//   "Tailwind",
//   "Redux",
// ];

let SKILLS_GROUPED = {};

const Skills = () => {
  const { ref } = useSectionInView("Skills");

  const [skills, setSkills] = useState([]);

  useEffect(() => {
    getSkills();
  }, []);

  const getSkills = async () => {
    const { data } = await axios.get("http://localhost:1338/api/skills/");
    console.log(data.data.map((skill) => skill.attributes.skillName));
    setSkills(data.data.map((skill) => skill.attributes.skillName));
  };

  // useEffect(() => {
  //   console.log(Math.floor(SKILLS.length / 5));
  // });

  if (skills.length > 0) {
    for (let i = 1; skills.length > 0; i++) {
      if (i % 2 !== 0) {
        SKILLS_GROUPED[i] = skills.slice(0, 6);
        skills.splice(0, 6);
      } else {
        SKILLS_GROUPED[i] = skills.slice(0, 5);
        skills.splice(0, 5);
      }
    }

    console.log("grouped", SKILLS_GROUPED);
  }

  //console.log(SKILLS_GROUPED);

  return (
    <section ref={ref} className={styles.skills_wrapper} id={"skills"}>
      <h2>My Skills</h2>
      <div className={styles.decoration}></div>

      <div className={styles.skills}>
        {Object.keys(SKILLS_GROUPED).map((key) => {
          return (
            <div key={key} className={styles.skill_group}>
              {SKILLS_GROUPED[key].map((skill) => {
                return (
                  <Magnetic key={skill} className={styles.skill}>
                    {skill}
                  </Magnetic>
                );
              })}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
