import React from "react"
import "./ResourceCard.css"

const ResourceCard = ({ title, thumbnail, link }) => {
  const image = require(`../../assets/images/${thumbnail}.png`)
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="resource-card-container">
        <h3 className="resource-card-title">{title}</h3>

        <img src={image} alt={title} className="resource-card-thumbnail" />
      </div>
    </a>
  )
}

export default ResourceCard
