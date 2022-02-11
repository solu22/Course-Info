import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Total from "./components/Total";
import courseParts from "./data/course.json";

const App = () => {
  const courseName = "Half Stack application development";
  

  const total = courseParts.reduce(
    (accu, curr) => accu + curr.exerciseCount,
    0
  );

  return (
    <div>
      <Header title ={courseName} />
      {courseParts.map((courseContent) => (
        <div key={courseContent.name}>
          <Content
            name={courseContent.name}
            exerciseCount={courseContent.exerciseCount}
          />
        </div>
      ))}

      <Total exerciseCount={total} />
    </div>
  );
};

export default App;
