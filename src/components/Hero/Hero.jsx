import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Prathyusha</h1>
        <p className={styles.description}>
        I am a Software Engineer at Vosyn with two years of experience in software development. I recently earned my Master’s degree and am passionate about building scalable and efficient software solutions. Let’s connect to discuss technology or opportunities.
        </p>
        <a href="https://www.linkedin.com/in/thota-prathyusha" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/mypic.png")}
        alt="Hero image of me"
        className={styles.mypic}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
