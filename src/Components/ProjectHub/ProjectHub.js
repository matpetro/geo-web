import React from 'react'
import ProjectSection from '../ProjectSection/ProjectSection'
import './ProjectHub.css';

const ProjectHub = () => {
  const projects = [
    { id: "1", title: "New Satellite Imagery", description: "Fresh data from EarthSat-3", status: "new" },
    { id: "2", title: "Urban Development", description: "Tracking city growth", status: "current", progress: 60 },
    { id: "3", title: "Forest Cover Analysis", description: "Annual deforestation report", status: "current", progress: 85 },
    { id: "4", title: "Coastal Erosion Study", description: "5-year comparison", status: "finished" },
    { id: "5", title: "Agricultural Yield Prediction", description: "Machine learning model training", status: "new" },
    { id: "6", title: "Climate Change Impact", description: "Glacier retreat analysis", status: "finished" },
    { id: "7", title: "Ocean Temperature Mapping", description: "Global warming effects on marine life", status: "new" },
    { id: "8", title: "Desert Expansion Tracking", description: "Monitoring arid region growth", status: "current", progress: 40 },
    { id: "9", title: "Urban Heat Island Effect", description: "Temperature variation in cities", status: "finished" },
    { id: "10", title: "Polar Ice Cap Monitoring", description: "Annual ice coverage assessment", status: "current", progress: 75 },
  ]
  return (
    <div className="container">
        <h1 className="title">Projects Dashboard</h1>
        <ProjectSection title="New Projects" projects={projects.filter(p => p.status === "new")} color="#3b82f6"/>
        <ProjectSection title="Current Projects" projects={projects.filter(p => p.status === "current")} color="#22c55e"/>
        <ProjectSection title="Finished Projects" projects={projects.filter(p => p.status === "finished")} color="#9ca3af"/>
    </div>
  )
}

export default ProjectHub