/** @format */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA"
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D"
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF"
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33"
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB"
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00"
  }
];
function App() {
  return (
    <div className='card'>
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}
function Avatar(props) {
  return <img src="images/jonas.jpeg" alt="Jonas schmedtmann" className='avatar'></img>;
}
function Intro() {
  return (
    <div>
      <h1>Jonas schmedtmann</h1>
      <p>
        Full-stack web developer and teacher at Udemy. When not coding or
        preparing a course, I like to play board games, to cook (and eat), or to
        just enjoy the Portuguese sun at the beach.
      </p>
    </div>
  );
}
function SkillList() {
  
  return <div className="skill-list">
    {skills.map(sk => <Skill skillObj={sk} key={sk.skill}/>)}
  </div>
}
function Skill({skillObj}) {
  return <div className='skill' style={{backgroundColor: skillObj.color}}>
    <span>{skillObj.skill}</span>
    {skillObj.level === "advanced" && "💪" }
    {skillObj.level === "intermediate" && "👍" }
    {skillObj.level === "beginner" && "👶" }
  </div>;
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
