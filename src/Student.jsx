import React from "react";

const Student = (props) => {
  return (
    <div className="student">
      <p>Name: {props.name}</p>
      <p>age: {props.age}</p>
      <p>Student: {props.isStudent ? "YES" : "NO"}</p>
    </div>
  );
};

export default Student;
