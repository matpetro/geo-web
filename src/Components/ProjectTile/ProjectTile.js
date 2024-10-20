import React from 'react'
import './ProjectTile.css';

const ProjectTile = ({project}) => {
    return (
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">{project.title}</h5>
            <p className="card-description">{project.description}</p>
          </div>
          <div className="card-content">
            {(project.status === "current" || project.status === "inprogress") && (
              <div className="progress-bar">
                <div className="progress-bg">
                  <div
                    className="progress-fill"
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
                <p className="progress-text">{project.progress}% Complete</p>
              </div>
            )}
            <button
              className={`card-button ${
                (project.status === "new" || project.status === "live")
                  ? "button-blue"
                  : (project.status === "current" || project.status === "inprogress")
                  ? "button-green"
                  : "button-gray"
              }`}
            >
              {project.status === "new"
                ? "Create Project"
                : (project.status === "inprogress")
                ? "Continue"
                : project.status === "live"
                ? "Start Labeling"
                : project.status === "current"
                ? "View Progress"
                : "View Details"}
            </button>
          </div>
        </div>
      );
}

export default ProjectTile