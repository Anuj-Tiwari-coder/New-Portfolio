// src/components/ProjectExperience.jsx
import React from "react";
import { PROJECT_EXPERIENCES } from "../../constants";
import "./Exprience.css";

const ProjectExperience = () => {
    return (
        <section className="project-experience-section" id="experience-container">
            <h2
                initial={{ opacity: 0, y: -20 }}
                transition={{ duration: 1 }}
                className="project-title">
                Project Experience
            </h2>

            <div
                initial={{ opacity: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="project-list">
                {PROJECT_EXPERIENCES.map((experience, index) => (
                    <div
                        initial={{ opacity: 0, x: -20 }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        key={index}
                        className="project-card">
                        <h3>{experience.project_name}
                        </h3>
                        <p><strong>Language:</strong> {experience.language}</p>
                        <p><strong>Software:</strong> {experience.software}</p>
                        <p><strong>Duration:</strong> {experience.duration}</p>
                        <p><strong>Problem Faced:</strong> {experience.problem_Faced}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectExperience;
