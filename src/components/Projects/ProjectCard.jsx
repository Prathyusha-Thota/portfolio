import React from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, source, features, screenshots, architectureDiagram, videoDemo }
}) => {
  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <h2 className={styles.feature}>Features</h2>

      {features && (
        <ul className={styles.features}>
          {features.map((feature, id) => (
            <li key={id} className={styles.feature}>{feature}</li>
          ))}
        </ul>
      )}

      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>{skill}</li>
        ))}
      </ul>

      <div className={styles.links}>
       
        <a href={source} className={styles.link} target="_blank" rel="noopener noreferrer">
          Source Code
        </a>
      </div>

      {screenshots && screenshots.length > 0 && (
        <div className={styles.screenshots}>
          {screenshots.map((screenshot, id) => (
            <img key={id} src={getImageUrl(screenshot)} alt={`Screenshot ${id + 1}`} className={styles.screenshot} />
          ))}
        </div>
      )}

      {architectureDiagram && (
        <img src={getImageUrl(architectureDiagram)} alt="Architecture Diagram" className={styles.architectureDiagram} />
      )}
    </div>
  );
};
