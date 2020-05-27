import React from 'react';
import './StudentCount.css';

const StudentCount = (props) => {

  const calculateStudents = () => {
    return props.schoolQuery.length;
  }

  return (
    <section className="StudentCount-section">
      <h2>Number of Active Students: {calculateStudents()}</h2>
    </section>
  )
}

export default StudentCount;