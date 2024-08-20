import React, { useRef, useState } from "react";

import Menu from "../Menu/Menu";

import styles from "./AboutMe.module.sass";
import Telegram from "./../../svg/Telegram";
import LinkedIn from "./../../svg/LinkedIn";
import Instagram from "./../../svg/Instagram";
import GitHub from "./../../svg/GitHub";

import myPhoto from "../../img/for portfolio.png";

import Magnetic from "../Animation/Magnetic";
import pdf from "../../pdf/Yevhen-Yevstratov new.pdf";
import { useSectionInView } from "../../hooks/useSectionInView";

const AboutMe = () => {
  const { ref } = useSectionInView("About Me");
  return (
    <header ref={ref}>
      <span className={styles.scrollTo} id={"about-me"}></span>
      <Menu />
      <section className={styles.left_section}>
        <h1>
          Hi, my name is Yevhen.
          <br />
          {"I'm"} self taught web developer
          <br />
          from Ukraine
        </h1>
        <article>
          <p>
            I am currently based in London
            <br />
            I have more than 2 years of experience
            <br /> in web development
          </p>

          <p>
            Passionate about information
            <br />
            technology and how it is transforming business
          </p>
        </article>
        <div className={styles.buttons}>
          <button
            className={`${styles.contact_btn} ${styles.btn}`}
            onClick={() => (window.location.href = "#contact")}
          >
            Contact me
          </button>
          <button
            className={`${styles.cv_btn} ${styles.btn}`}
            onClick={() => window.open(pdf)}
          >
            Download CV
          </button>
        </div>
      </section>
      <section className={styles.right_section}>
        <div className={styles.img_wrapper}>
          <img className={styles.img} src={myPhoto}></img>
        </div>

        <div className={styles.socials}>
          <Magnetic
            href="https://t.me/YevMyDev"
            className={`${styles.social_item} ${styles.telegram}`}
            isLink={true}
          >
            <Telegram />
          </Magnetic>
          <Magnetic
            href="https://linkedin.com/in/
yevhen-yevstratov-a2271023b"
            className={`${styles.social_item} ${styles.linkedIn}`}
            isLink={true}
          >
            <LinkedIn />
          </Magnetic>
          <Magnetic
            href="https://instagram.com/yevyevstratov?igshid=NTc4MTIwNjQ2YQ=="
            className={`${styles.social_item} ${styles.insta}`}
            isLink={true}
          >
            <Instagram />
          </Magnetic>
          <Magnetic
            href="https://github.com/Whiz7z"
            className={`${styles.social_item} ${styles.git}`}
            isLink={true}
          >
            <GitHub />
          </Magnetic>
        </div>
        <div className={styles.mail_block}>
          <a className={styles.mail} href="mailto:gjevstratov@gmail.com">
            gjevstratov@gmail.com
          </a>
        </div>
      </section>
    </header>
  );
};

export default AboutMe;
