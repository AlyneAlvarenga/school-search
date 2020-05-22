import React from 'react';

const SchoolData = (props) => {
  return (
    <li>
      <p>Student First Name: {props.schoolObj.studentFirstName}</p>
      <p>Student Last Name: {props.schoolObj.studentLastName}</p>
      <p>Grades:</p>
      <ul>
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