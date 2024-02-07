import React from "react";
import PropTypes from "prop-types";
import { GoProjectSymlink } from "react-icons/go";
import { SiGithub } from "react-icons/si";

import Magnetic from "../Animation/Magnetic";
import styles from "./ProjectItem.module.sass";

import { motion } from "framer-motion";

const blockLeftAnimation = {
  hidden: {
    x: 200,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.25,
      duration: 0.2,
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
      type: "spring",
      bounce: 0.25,
      duration: 0.2,
    },
  },
};

const ProjectItem = (props) => {
  const {
    image,
    name,
    description,
    technologies,
    direction,
    gitHubLink,
    demoLink,
  } = props;
  return (
    <motion.div
      initial="hidden"
      whileInView={"visible"}
      variants={
        direction === "right" ? blockRightAnimation : blockLeftAnimation
      }
      className={`${styles.project} ${
        direction === "right" ? styles.project_right : styles.project_left
      }`}
    >
      <div
        className={`${styles.container} ${
          direction === "right" ? styles.container_right : styles.container_left
        }`}
      >
        <div className={styles.image_wrapper}>
          <img
            className={styles.img}
            src={`${import.meta.env.VITE_REACT_APP_STRAPI_API_URL}${image}`}
            alt="project"
          />
        </div>
        <div className={styles.info}>
          <article>
            <h3>{name}</h3>
            <p>{description}</p>
          </article>
          <ul>
            {technologies.map((tech) => {
              return (
                <Magnetic key={tech}>
                  <li>{tech}</li>
                </Magnetic>
              );
            })}
          </ul>
        </div>
      </div>
      {direction === "right" ? (
        <div className={styles.right_btn}>
          <div className={styles.links}>
            <a
              href={gitHubLink}
              target="_blank"
              rel="noreferrer"
              className={styles.git_link}
            >
              <SiGithub className={[styles.icon, styles.git_icon]} />
              <span>Github</span>
            </a>
            <a
              href={demoLink}
              target="_blank"
              rel="noreferrer"
              className={styles.project_link}
            >
              <GoProjectSymlink
                className={[styles.icon, styles.project_icon]}
              />
              <span>Demo</span>
            </a>
          </div>
        </div>
      ) : (
        <div className={styles.left_btn}>
          <div className={styles.links}>
            <a
              href={gitHubLink}
              target="_blank"
              rel="noreferrer"
              className={styles.git_link}
            >
              <SiGithub
                className={[styles.icon, styles.git_icon]}
                width={"40px"}
                height={"40px"}
              />
              <span>Github</span>
            </a>
            <a
              href={demoLink}
              target="_blank"
              rel="noreferrer"
              className={styles.project_link}
            >
              <GoProjectSymlink
                className={[styles.icon, styles.project_icon]}
              />
              <span>Demo</span>
            </a>
          </div>
        </div>
      )}
    </motion.div>
  );
};

ProjectItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.array.isRequired,
  direction: PropTypes.string.isRequired,
  gitHubLink: PropTypes.string,
  demoLink: PropTypes.string,
};

export default ProjectItem;
