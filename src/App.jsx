import { useState } from "react";
import "./App.css";
import Course from "./Course";

function App() {
  const [courseArray, setCourse] = useState([]);

  function addCourse() {
    const availableCourseArray = new Array("angular", "dotnet", "react", "sql");
    const randomCourse = availableCourseArray[Math.floor(Math.random() * availableCourseArray.length)];
    setCourse([...courseArray,randomCourse]);
  }

  const courseList = courseArray.map((x, index) => (
    <div>
      <Course courseName={x} index={index} />
    </div>
  ));

  return (
    <div className="app">
      <button onClick={addCourse} className="appButton">
        Add Course
      </button>
      <div className="courseList">{courseList}</div>
    </div>
  );
}

export default App;
