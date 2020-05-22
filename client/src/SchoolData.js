import React from 'react';

const SchoolData = (props) => {
  return (
    <li>
      <p>Student First Name: {props.schoolObj.studentFirstName}</p>
      <p>Student Last Name: {props.schoolObj.studentLastName}</p>
      <p>Grade: {props.schoolObj.studentGrade}</p>
    </li>
  )
}

export default SchoolData;