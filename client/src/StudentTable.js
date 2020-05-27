import React from 'react';
import StudentCount from './StudentCount';
import './StudentTable.css';

const StudentTable = (props) => {

  const showSubjectHeadings = () => {
    const lengthsArr = props.schoolQuery.map(obj => obj.grades.length);
    const highestNum = Math.max(...lengthsArr);
    const arrOfElements = [];

    for (let i = 0; i < highestNum; i++) {
      arrOfElements.push(`Subject - Grade`);
    }

    return arrOfElements;
  }
  
  return (
    <main className="App StudentTable-container">
      <StudentCount schoolQuery={props.schoolQuery} />
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            {
              showSubjectHeadings().map((el, i) => (
                <th key={i}>{el}</th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {
            props.schoolQuery.map(obj => (
              <tr key={obj._id}>
                <td>{obj.studentFirstName}</td>
                <td>{obj.studentLastName}</td>
                  {
                    obj.grades.map(gradesObj => (
                      <td key={gradesObj._id}>{gradesObj.subject} - {gradesObj.grade}</td>
                    ))
                  }
              </tr>
            ))
          }
        </tbody>
      </table>
    </main>
  )
}

export default StudentTable;