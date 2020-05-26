import React from 'react';
import './SchoolData.css';

const SchoolData = (props) => {
  return (
    <li className="SchoolData-card">
      <p>Last Name: <strong>{props.schoolObj.studentLastName}</strong></p>
      <p>First Name: <strong>{props.schoolObj.studentFirstName}</strong></p>
      <p>Grades</p>
      <ul className="SchoolData-gradesContainer">
      {
        props.schoolObj.grades.map(obj => {
          return (
            <li key={obj._id}>
              <p>{obj.subject}</p>
              <p>{obj.grade}</p>
            </li>
          )
        })
      }
      </ul>
    </li>
  )
}

export default SchoolData;