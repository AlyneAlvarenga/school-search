import React from 'react';

const SchoolData = (props) => {
  return (
    <li>
      <p>Student First Name: {props.schoolObj.studentFirstName}</p>
      <p>Student Last Name: {props.schoolObj.studentLastName}</p>
      <p>Grades:</p>
      <ul>
        <li>
          <p>Math</p>
          <p>{props.schoolObj.grades.Math}</p>
        </li>
        <li>
          <p>Science</p>
          <p>{props.schoolObj.grades.Science}</p>
        </li>
      </ul>
    </li>
  )
}

export default SchoolData;