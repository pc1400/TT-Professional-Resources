import React from "react"
import "./ResourceList.css" // Import the CSS file for the main content area styling (optional).
import ResourceCard from "./ResourceCard" // Import the generic ResourceCard component.

const ResourceList = ({ selectedCategory }) => {
  // Sample resource data (you can replace this with your actual resource data)
  const resources = {
    "Interview Preparation": [
      {
        title: "Interview prep for Bros",
        thumbnail: "InterviewCard",
        link: "https://docs.google.com/presentation/d/1qIKdrsWVR39Q6IjWVyOVTz4uWiVoQQHON1lX1FRIguA/edit#slide=id.p1",
      },
      {
        title: "Go2Pros",
        thumbnail: "GoTwoProsCard",
        link: "https://docs.google.com/spreadsheets/d/1Cws3nLjev3UMg6a_KQiwYZy2TZ1OzLZLYQNlFGLdyyI/edit#gid=513183998",
      },
    ],
    "Academic Planning": [
      {
        title: "4 Year Plan Template",
        thumbnail: "FourYearPlanCard",
        link: "https://docs.google.com/spreadsheets/d/1VKqDqhRz6yaVxa7xULBvE06HV9jsTjR1Y6VI3Xcq8Gc/edit#gid=230516111",
      },
    ],
    "Professional Development": [
      {
        title: "Professional Program Session 1",
        thumbnail: "ProfTrainingCard1",
        link: "https://docs.google.com/presentation/d/1k49BMCA1SfpR7d98Gb3tI-eKqYjXAizhA8XkE1yNfAw/edit#slide=id.p1",
      },
      {
        title: "Professional Program Session 2",
        thumbnail: "ProfTrainingCard2",
        link: "https://docs.google.com/presentation/d/1C_vJpSqVHHa7rpXUPw9hXTWBTw2_Gw5DeSwJf7Oj4dM/edit#slide=id.p1",
      },
      {
        title: "Professional Program Session 3",
        thumbnail: "ProfTrainingCard3",
        link: "https://docs.google.com/presentation/d/1bCNX2zBD8YQQ2878xaoTg57ciPXTamK8erhq0J8R4KU/edit#slide=id.p22",
      },
      {
        title: "Professional Program Session 4",
        thumbnail: "ProfTrainingCard4",
        link: "https://docs.google.com/presentation/d/1hUWRv0ep-aYrgWfjUIOI8fnO7YQ1UkkAa0VWl6C7kkY/edit#slide=id.p22",
      },
      {
        title: "Professional Program Session 5",
        thumbnail: "ProfTrainingCard5",
        link: "https://docs.google.com/presentation/d/18jeIBCDx0AaVNis3IKEWyFVwKOaYlX86MfKwbgNkaaI/edit#slide=id.p22",
      },
      {
        title: "Networking Workshop",
        thumbnail: "NetworkingCard",
        link: "https://docs.google.com/presentation/d/1bFyXDS_IgTl-KlnCvtY7lTgs8Du4kqM-2Bsou7aq8nM/edit#slide=id.gab4c53ca64_0_0",
      },
      {
        title: "Resume Book",
        thumbnail: "ResumeCard",
        link: "https://docs.google.com/spreadsheets/d/1FzyftPuxdDOyyPT66up7Bt07Wur3zUfFZdlxjGHcUso/edit#gid=0",
      },
    ],
    "Undergraduate Research": [
      {
        title: "Undergraduate Research Workshop",
        thumbnail: "ResearchCard",
        link: "https://docs.google.com/presentation/d/1uXrxUfKBIV34bCgIZjODdn1o9nfLf--ZkPOkvr6pqkE/edit#slide=id.p1",
      },
    ],
  }

  // Helper function to get the resource cards for the selected category
  const getResourceCards = (category) => {
    if (!category || !resources[category]) {
      return null
    }

    return resources[category].map((resource, index) => {
      return (
        <ResourceCard
          key={index}
          title={resource.title}
          thumbnail={resource.thumbnail}
          link={resource.link}
        />
      )
    })
  }

  return (
    <div className="resource-list">
      <h2>{selectedCategory}</h2>
      <div className="cards-container">
        {getResourceCards(selectedCategory)}
      </div>
    </div>
  )
}

export default ResourceList
