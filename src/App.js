import React, { useState, useEffect } from "react"
import Header from "./components/Header/Header"
import NavigationMenu from "./components/NavigationMenu/NavigationMenu"
import ResourceList from "./components/ResourceList/ResourceList" // Import the ResourceList component
import "./App.css" // Import the CSS file for the App component.

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null)

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
  }

  return (
    <div className="app-container">
      <Header />
      <div className="content-container">
        <NavigationMenu onCategoryChange={handleCategoryChange} />
        <ResourceList selectedCategory={selectedCategory} />
      </div>
    </div>
  )
}

export default App
