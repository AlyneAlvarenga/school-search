import React from 'react';

const SchoolData = (props) => {
  return (
    <li>
      <p>Student Name: {props.schoolObj.studentName}</p>
      <p>Grade: {props.schoolObj.studentGrade}</p>
    </li>
  )
}

export default SchoolData;