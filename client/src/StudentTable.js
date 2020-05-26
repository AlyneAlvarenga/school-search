import React from 'react';

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
    <main className="App">
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
              <tr>
                <td>{obj.studentFirstName}</td>
                <td>{obj.studentLastName}</td>
                  {
                    obj.grades.map(gradesObj => (
                      <>
                        <td>{gradesObj.subject} - {gradesObj.grade}</td>
                      </>
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