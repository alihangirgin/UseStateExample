import React from "react";
import AngularImage from "./images/angular.png";
import DotnetImage from "./images/dotnet.png";
import ReactImage from "./images/react.png";
import SqlImage from "./images/sql.png";
import "./Course.css";

const MapCourseImage = {
  angular: AngularImage,
  dotnet: DotnetImage,
  react: ReactImage,
  sql: SqlImage,
};

export default function Course({courseName}, {index}) {
    
    const courseImageSrc = MapCourseImage[courseName];
    console.log("image");
    console.log(courseImageSrc);

  return (
    <div className="courseDiv">
      <img className="courseButton" src={courseImageSrc} alt={courseName} />
    </div>
  );
}
