import React, { useEffect, useRef, useState } from "react";

import styles from "./Menu.module.sass";

import { FaBars, FaTimes } from "react-icons/fa";
import { motion, scroll } from "framer-motion";
import LinkedIn from "./../../svg/LinkedIn";
import { useActiveSectionContext } from "../../context/active-section-context";

const links = [
  {
    name: "About Me",
    link: "#about-me",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

const Menu = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const navRef = useRef();
  const [isTransparent, setIstransparent] = useState(false);
  const [burgerIsOpened, setBurgerIsOpened] = useState(false);

  const showBar = () => {
    let html = document.getElementsByTagName("html")[0];
    html.style.overflow = burgerIsOpened ? "auto" : "hidden";
    setBurgerIsOpened((prev) => !prev);
    navRef.current.classList.toggle(styles.responsive_nav);
  };

  scroll((progress) => {
    if (progress < 0.03) {
      setIstransparent(true);
    } else {
      setIstransparent(false);
    }
  });

  const linkHandler = (name) => {
    setActiveSection(name);
    setTimeOfLastClick(Date.now());
    if (burgerIsOpened) {
      showBar();
    }
  };

  return (
    <div className={styles.menu_wrapper}>
      <nav ref={navRef} className={`${styles.nav}`}>
        <ul>
          {/* <li>
            <a href="#about-me">
              About Me
              <span className={styles.selected}></span>
            </a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li> */}
          {links.map((link) => {
            return (
              <li key={link.name}>
                <a
                  href={link.link}
                  onClick={() => linkHandler(link.name)}
                  className={`${activeSection === link.name && styles.active}`}
                >
                  {link.name}
                  {!burgerIsOpened && activeSection === link.name && (
                    <motion.span
                      className={styles.selected}
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    ></motion.span>
                  )}
                </a>
              </li>
            );
          })}
        </ul>
        <button
          className={`${styles.nav_btn} ${styles.nav_close_btn}`}
          onClick={() => showBar()}
        >
          <FaTimes />
        </button>
      </nav>

      <button
        className={`${styles.nav_btn} ${styles.nav_burger_btn}`}
        onClick={() => showBar()}
      >
        <FaBars />
      </button>
    </div>
  );
};

export default Menu;
