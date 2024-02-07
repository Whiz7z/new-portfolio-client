import React, { useEffect, useState } from "react";

import styles from "./Projects.module.sass";
import booksImage from "../../img/projects/books-market.png";
import rpsImage from "../../img/projects/game.png";
import moneyTrackerImage from "../../img/projects/myexpenses.png";
import travelImg from "../../img/projects/travel.png";
import ProjectItem from "./ProjectItem";

import axios from "axios";
import { calcLength } from "framer-motion";
import { useSectionInView } from "../../hooks/useSectionInView";

const Projects = () => {
  const { ref } = useSectionInView("Projects");
  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    const { data } = await axios.get(
      `${
        import.meta.env.VITE_REACT_APP_STRAPI_API_URL
      }/api/projects/?populate=project_skills,mainImg`
    );
    //console.log(data.data.map((project) => project.attributes));
    setProjects(data.data.map((project) => project.attributes));
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <section ref={ref} className={styles.projects_wrapper} id="projects">
      <h2>Projects</h2>
      <div className={styles.decoration}></div>
      <div className={styles.projects}>
        {projects.length > 0 &&
          projects.map((project, index) => {
            return (
              <ProjectItem
                key={project.name}
                name={project.name}
                description={project.description}
                image={project.mainImg.data[0].attributes.url}
                technologies={project.project_skills.data.map((skill) => {
                  return skill.attributes.skillName;
                })}
                gitHubLink={project.gitHubLink}
                demoLink={project.demoLink}
                direction={project.direction}
              />
            );
          })}
      </div>
    </section>
  );
};

export default Projects;
