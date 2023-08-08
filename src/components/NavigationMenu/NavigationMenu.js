// NavigationMenu.js
import React, { useState } from "react"

import "./NavigationMenu.css"

const NavigationMenu = ({ onCategoryChange }) => {
  const [activeCategory, setActiveCategory] = useState(null)

  const categories = [
    "Interview Preparation",
    "Academic Planning",
    "Professional Development",
    "Undergraduate Research",
  ]

  const handleCategoryClick = (category) => {
    setActiveCategory(category)
    onCategoryChange(category)
  }

  return (
    <nav className="navigation-menu">
      <ul className="category-list">
        {categories.map((category, index) => (
          <li
            key={index}
            className={`category-item ${
              activeCategory === category ? "active" : ""
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavigationMenu
