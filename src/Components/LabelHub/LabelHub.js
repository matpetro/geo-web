import React from 'react'
import ProjectSection from '../ProjectSection/ProjectSection'
import './LabelHub.css';

const LabelHub = () => {
  const projects = [
    { id: "1", title: "New Satellite Imagery", description: "Fresh data from EarthSat-3", status: "live" },
    { id: "2", title: "Urban Development", description: "Tracking city growth", status: "inprogress", progress: 60 },
    { id: "3", title: "Forest Cover Analysis", description: "Annual deforestation report", status: "current", progress: 85 },
    { id: "4", title: "Coastal Erosion Study", description: "5-year comparison", status: "live" },
    { id: "5", title: "Agricultural Yield Prediction", description: "Machine learning model training", status: "live" },
    { id: "6", title: "Climate Change Impact", description: "Glacier retreat analysis", status: "live" },
    { id: "7", title: "Ocean Temperature Mapping", description: "Global warming effects on marine life", status: "live" },
    { id: "8", title: "Desert Expansion Tracking", description: "Monitoring arid region growth", status: "live", progress: 40 },
    { id: "9", title: "Urban Heat Island Effect", description: "Temperature variation in cities", status: "finished" },
    { id: "10", title: "Polar Ice Cap Monitoring", description: "Annual ice coverage assessment", status: "current", progress: 75 },
  ]
  return (
    <div className="container">
        <h1 className="title">Projects</h1>
        {projects.filter(p => p.status === "inprogress").length > 0 ? <ProjectSection title="In Progress" projects={projects.filter(p => p.status === "inprogress")} color="#22c55e"/> : <></>}
        <ProjectSection title="Live Projects" projects={projects.filter(p => p.status === "live")} color="#3b82f6"/>
    </div>
  )
}

export default LabelHub