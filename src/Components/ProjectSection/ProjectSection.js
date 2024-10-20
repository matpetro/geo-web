import React, { useRef } from "react";
import ProjectTile from "../ProjectTile/ProjectTile";
import './ProjectSection.css';

function ProjectSection({ title, projects, color }) {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320; // Adjust based on card width + gap
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="project-section">
      <div className="project-header">
        <h2 className="project-title" style={{ color: color }}>{title}</h2>
        <div className="scroll-buttons">
            <button onClick={() => scroll("left")} className="scroll-button">
                {"<"}
            </button>
            <button onClick={() => scroll("right")} className="scroll-button">
                {">"}
            </button>
        </div>
      </div>
      <div
        ref={scrollContainerRef}
        className="project-scroll-container"
      >
        {projects.length > 0 ? (
          projects.map((project) => (
            <ProjectTile key={project.id} project={project} />
          ))
        ) : (
          <p className="no-projects-message">
            {title === "Live Projects" 
              ? "No Live Projects" 
              : title === "Current Projects"
              ? "No Current Projects"
              : title === "Finished Projects"
              ? "No Finished Projects"
              : ""
            }
          </p>
        )}
      </div>
    </section>
  );
}

export default ProjectSection;